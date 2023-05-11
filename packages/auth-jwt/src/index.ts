import BadCredentialsError from '@ohoareau/errors/lib/BadCredentialsError';

export type auth_jwt_options = {
    secret?: string;
    duration?: number;
    refreshDuration?: number;
    refreshSecret?: string;
};

const jwtTokenDuration = parseInt(process.env.JWT_TOKEN_DURATION || '3600'); // 1h
const jwtRefreshTokenDuration = parseInt(process.env.JWT_REFRESH_TOKEN_DURATION || `${7 * 24 * 3600}`); // 7d
const jwtSecret = String(process.env.JWT_SECRET || 'the-very-secret-secret');
const jwtRefreshSecret = String(process.env.JWT_REFRESH_SECRET || 'the-very-secret-secret-number-2');

const defaultPopulate = ({ id, username, email, admin = false }) => ({
    id,
    username,
    email,
    admin,
    permissions: [...(admin ? ['admin'] : []), 'user'],
});

const generateTokensForUser = (data, populate: Function | undefined = undefined, options?: auth_jwt_options) => {
    return generateTokens((populate || defaultPopulate)(data) || {}, options);
};

const generateTokens = (data, {secret: forcedSecret, duration: forcedDuration, refreshDuration: forcedRefreshDuration, refreshSecret: forcedRefreshSecret}: auth_jwt_options = {}) => {
    const jwt = require('jsonwebtoken');
    return {
        token: jwt.sign(
            {
                exp: Math.floor(Date.now() / 1000) + (undefined !== forcedDuration ? forcedDuration : jwtTokenDuration),
                ...data,
                scope: (data['permissions'] || []).join(' '),
            },
            undefined !== forcedSecret ? forcedSecret : jwtSecret,
        ),
        refreshToken: jwt.sign(
            {
                exp: Math.floor(Date.now() / 1000) + (undefined !== forcedRefreshDuration ? forcedRefreshDuration : jwtRefreshTokenDuration),
                ...data,
                scope: (data['permissions'] || []).join(' '),
            },
            undefined !== forcedRefreshSecret ? forcedRefreshSecret : jwtRefreshSecret,
        ),
    };
};

const createAuthToken = async ({ user, password, populate = undefined }, options?: auth_jwt_options) => {
    if (!user || !password || !user.password)
        throw new BadCredentialsError((user && user.username) || undefined, 'unknown user');
    if (!(await require('bcryptjs').compareSync(password, user.password)))
        throw new BadCredentialsError(user.username, 'bad password');
    return generateTokensForUser(user, populate, options);
};

const verifyAuthToken = async (token, {refreshSecret: forcedRefreshSecreet}: auth_jwt_options = {}) => {
    const jwt = require('jsonwebtoken');
    try {
        return await jwt.verify(token, undefined !== forcedRefreshSecreet ? forcedRefreshSecreet : jwtRefreshSecret);
    } catch (e: any) {
        throw new BadCredentialsError(undefined, e.message);
    }
}
const refreshAuthToken = async ({ refreshToken, fetch = undefined, populate = undefined }, options: auth_jwt_options = {}) => {
    let data, user;
    data = await verifyAuthToken(refreshToken, options);
    try {
        user = fetch ? await (<any>fetch)(data) : data;
    } catch (e: any) {
        throw new BadCredentialsError(undefined, e.message);
    }
    if (!user) throw new BadCredentialsError((data && data.username) || undefined, 'unknown user');
    return generateTokensForUser(user, populate, options);
};

export default { createAuthToken, refreshAuthToken, generateTokens, verifyAuthToken };

import {auth_data, tokens} from "../types";
import decodeJwt from 'jwt-decode';

function isAccessTokenValid({accessToken}: tokens): boolean {
    if (!accessToken) return false;
    return !isTokenExpired(accessToken);
}

function isIdentitifed({accessToken}: tokens): boolean {
    return !!accessToken;
}

function isTokenExpired(token: string|undefined, minExpirationDelay: number = 2) {
    if (!token) return true;
    const decodedToken = decodeToken(token);
    const now = Math.floor(Date.now() / 1000);
    return ((decodedToken || {}).exp - now) < ((minExpirationDelay as number) || 1);
}

function decodeToken(token: string): auth_data {
    return decodeJwt(token) as auth_data;
}

export async function factory(createAccessToken: () => Promise<tokens>, refreshAccessToken: (tokens: tokens) => Promise<tokens>) {
    const ctx: tokens = {accessToken: undefined, refreshToken: undefined};
    const setTokens = ({accessToken, refreshToken}: tokens) => {
        ctx.accessToken = accessToken;
        ctx.refreshToken = refreshToken;
    }
    return async () => {
        if (!isIdentitifed(ctx)) {
            setTokens(await createAccessToken());
        }
        if (isAccessTokenValid(ctx)) return;
        setTokens(await refreshAccessToken(ctx));
        return `Bearer ${ctx.accessToken}`;
    };
}

export default factory;

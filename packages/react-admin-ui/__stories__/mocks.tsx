export async function generic(data) {
    let result;
    let duration = 1000;
    const error = undefined;

    switch (data?.options?.variables?.data?.username || data?.options?.variables?.data?.email) {
        case 'unknown@email.com':
            result = { loading: false, error: { username: { message: 'This user does not exist' } }, data: undefined };
            break;
        case 'badcredentials@email.com':
            result = { loading: false, error: { password: { message: 'Bad credentials' } }, data: undefined };
            break;
        case 'existing@email.com':
            result = { loading: false, error: { username: { message: 'User already exists' } }, data: undefined };
            break;
        case 'blocked@email.com':
            result = {
                loading: false,
                error: { username: { message: 'Account is blocked' }, email: { message: 'Account is blocked' } },
                data: undefined,
            };
            break;
        case 'disabled@email.com':
            result = {
                loading: false,
                error: { username: { message: 'Account is disabled' }, email: { message: 'Account is disabled' } },
                data: undefined,
            };
            break;
        case 'unexpected@email.com':
            result = { loading: false, error: { '': { message: 'An unexpected error occured' } }, data: undefined };
            break;
        case 'timeout@email.com':
            result = {
                loading: false,
                error: { '': { message: 'There was a timeout error, please try again later' } },
                data: undefined,
            };
            duration = 5000;
            break;
        default:
            result = { loading: false, error: undefined, data: {} };
            break;
    }

    return { result, duration, error };
}

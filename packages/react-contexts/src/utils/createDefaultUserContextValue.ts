import { user, user_tokens, user_context_value } from '../types';

export const createDefaultUserContextValue = (defaultValue: user | undefined = undefined): user_context_value => ({
    user: defaultValue,
    /* eslint @typescript-eslint/no-empty-function: 0 */
    setUser: (user: user) => {},
    /* eslint @typescript-eslint/no-empty-function: 0 */
    logout: () => {},
    refreshUser: () => undefined,
    /* eslint @typescript-eslint/no-empty-function: 0 */
    setTokens: (tokens: user_tokens) => {},
    getTokens: () => undefined,
});

export default createDefaultUserContextValue;

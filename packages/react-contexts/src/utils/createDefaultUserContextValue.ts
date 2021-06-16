import {user, user_tokens, user_context_value} from "../types";

export const createDefaultUserContextValue = (defaultValue: user|undefined = undefined): user_context_value =>
    ({user: defaultValue, setUser: (user: user) => {}, logout: () => {}, refreshUser:  () => undefined, setTokens: (tokens: user_tokens) => {}, getTokens: () => undefined,})
;

export default createDefaultUserContextValue
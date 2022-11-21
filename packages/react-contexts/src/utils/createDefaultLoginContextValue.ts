import { login_context_value } from '../types';

export const createDefaultLoginContextValue = (): login_context_value => ({
    actionProps: {},
    formProps: {},
    templateProps: {},
    actionComponent: undefined,
    formComponent: undefined,
    templateComponent: undefined,
    layout: undefined,
    map: undefined,
    propagate: undefined,
    succeed: undefined,
});

export default createDefaultLoginContextValue;

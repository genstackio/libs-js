import { register_context_value } from '../types';

export const createDefaultRegisterContextValue = (): register_context_value => ({
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

export default createDefaultRegisterContextValue;

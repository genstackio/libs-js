import { register_context_value } from '../types';

export const createDefaultRegisterContextValue = (): register_context_value => ({
    actionProps: {},
    formProps: {},
    templateProps: {},
    actionComponent: undefined,
    formComponent: undefined,
    templateComponent: undefined,
});

export default createDefaultRegisterContextValue;

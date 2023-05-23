import { admin_context_value } from '../types';

export function createDefaultAdminContextValue(): admin_context_value {
    return {
        admin: { code: 'default', name: 'Default', staticsDns: 'statics.default' },
    };
}

export default createDefaultAdminContextValue;

import { upload_context_value } from '../types';

// noinspection JSUnusedLocalSymbols
export const createDefaultUploadContextValue = (
    defaultValue: upload_context_value | undefined = undefined,
): upload_context_value =>
    defaultValue || {
        requestUploadInfos: async (props: any, userContext: any) => {
            const v = ((props.defaultValues || {})[props.name || props.kind || 'file'] || {}).uploadUrlInfos || {};
            return { fields: JSON.parse(v.fields || '{}'), meta: { fileUrl: v.fileUrl }, url: v.uploadUrl };
        },
    };

export default createDefaultUploadContextValue;

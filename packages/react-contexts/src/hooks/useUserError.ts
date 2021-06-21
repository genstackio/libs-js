import {useTranslation} from "./useTranslation";
import errors from "../configs/errors";

export function useUserError(error, group = 'default') {
    const {t} = useTranslation();
    if (!error || !error.message) return undefined;
    if (error?.extensions?.exception?.Code || error?.extensions?.exception?.status) {
        const def = [
            ((errors[group] || {})[''] || {})[error!.extensions!.exception!.Code],
            ((errors[group] || {})['http'] || {})[`${error!.extensions!.exception!.status}`],
            ((errors['default'] || {})[''] || {})[error!.extensions!.exception!.Code],
            ((errors['default'] || {})['http'] || {})[`${error!.extensions!.exception!.status}`],
        ].find(x => !!x);
        if (def) {
            if ('string' === typeof def) return {type: 'error', message: t(def)};
            return {type: def.type || 'error', message: t(def.message || error.message)};
        }
    }
    return {type: 'error', message: error.message};
}

export default useUserError

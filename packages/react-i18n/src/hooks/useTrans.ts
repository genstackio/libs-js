import {
    DefaultNamespace,
    KeyPrefix,
    Namespace,
    useTranslation,
    UseTranslationOptions,
    UseTranslationResponse,
} from 'react-i18next';

export function useTrans<N extends Namespace = DefaultNamespace, TKPrefix extends KeyPrefix<N> = undefined>(
    ns?: N | Readonly<N>,
    options?: UseTranslationOptions<TKPrefix>,
): UseTranslationResponse<N, TKPrefix> {
    return useTranslation<N, TKPrefix>(ns, options);
}

// noinspection JSUnusedGlobalSymbols
export default useTrans;

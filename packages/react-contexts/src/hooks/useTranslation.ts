import { useCallback } from 'react';
import { DefaultNamespace, useTranslation as useBaseTranslation, UseTranslationResponse } from 'react-i18next';

export function useTranslation(): UseTranslationResponse<DefaultNamespace> | { t: Function; exists: Function } {
    /**
     * for some not understood reasons, using directly useTranslation and the returned t() function
     * seems not to be working well to update the labels.
     * the following trick seems to be working (i.e. using i18n.t() instead of t().)
     */
    const { i18n, ...x } = useBaseTranslation();
    const t = useCallback(i18n.t, [i18n, i18n.language]);
    const exists = useCallback(i18n.exists, [i18n, i18n.language]);
    return { ...x, i18n, t, exists };
}

export default useTranslation;

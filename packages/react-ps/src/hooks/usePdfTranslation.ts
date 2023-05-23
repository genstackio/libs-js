import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';

export function usePdfTranslation(): { i18n: any; t: Function; ready: boolean } {
    const { type } = { type: undefined };
    const { t, ...rest } = useTranslation();
    const enhancedT = useCallback(
        (key: string | string[], opts?: any) => {
            key = Array.isArray(key) ? key : [key];
            return t(
                (key as string[]).reduce((acc: string[], k: string) => {
                    const [a, ...b] = k.split(/_/);
                    acc.push(`${a}_${type}${b && b.length ? `_${b.join('_')}` : ''}`);
                    acc.push(`${a}${b && b.length ? `_${b.join('_')}` : ''}`);
                    return acc;
                }, [] as string[]) as any,
                opts,
            );
        },
        [t, type],
    );

    const modifiedT = useCallback((a, b = {}) => enhancedT(a, { ns: 'pdf', ...b }), [enhancedT]);
    return { ...rest, t: modifiedT };
}

export default usePdfTranslation;

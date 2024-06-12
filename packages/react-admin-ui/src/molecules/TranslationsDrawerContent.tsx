import { useCallback, useEffect, useState } from 'react';
import TranslationsForm from './forms/TranslationsForm';
import useTranslationLocalesContext from '@genstackio/react-contexts/lib/hooks/useTranslationLocalesContext';
import Spinner from '../atoms/Spinner';
import { useTranslation } from 'react-i18next';
import useTranslateContext from '@genstackio/react-contexts/lib/hooks/useTranslateContext';

export function TranslationsDrawerContent({
    itemType,
    itemId,
    itemKey,
    onClose,
    type,
    defaultValue,
    autotranslatable,
}: TranslationsDrawerContentProps) {
    const { t } = useTranslation();
    const { locales, saveItem, getItem, getFlagIconUrl } = useTranslationLocalesContext();
    const { referenceLocale } = useTranslateContext();
    const [{ data, loading, called }, setState] = useState<{
        data: unknown;
        loading: boolean;
        called: boolean;
        error?: unknown;
    }>({
        data: undefined,
        loading: true,
        called: false,
        error: undefined,
    });
    useEffect(() => {
        if (data || called) return;

        const p = getItem(itemType, itemId, itemKey);
        p.then((data) => {
            setState({ called: true, data, loading: false, error: undefined });
        });
        p.catch((e: any) => {
            setState({ called: true, data: undefined, loading: false, error: e });
        });
    }, [setState, data, called, getItem, itemType, itemId, itemKey]);

    const onSubmit = useCallback(
        (data: any) => {
            const p = saveItem(itemType, itemId, itemKey, data);
            p.then(() => {
                onClose?.();
            });
            p.catch((e: any) => {
                console.error(e);
                onClose?.();
            });
        },
        [onClose, saveItem, itemId, itemType, itemKey],
    );

    if (!data || loading) return <Spinner />;

    return (
        <div className={'w-full flex flex-col justify-between items-center gap-4'}>
            <div className={'w-full rounded-md p-4 text-left bg-light flex flex-col gap-2'}>
                <p className={'font-semibold'}>{t('translations_form_default_value')}</p>
                {!!defaultValue && <pre className={'mt-2 whitespace-pre-wrap'}>{defaultValue as string}</pre>}
            </div>
            {!locales?.length ? (
                <div>{t('translations_form_no_locales')}</div>
            ) : (
                <TranslationsForm
                    locales={locales}
                    onSubmit={onSubmit}
                    referenceValue={defaultValue as string | undefined}
                    referenceLocale={referenceLocale}
                    defaultValues={data as any}
                    autotranslatable={autotranslatable}
                    getFlagIconUrl={getFlagIconUrl}
                    onCancel={onClose}
                    type={type}
                />
            )}
        </div>
    );
}

export interface TranslationsDrawerContentProps {
    itemType: string;
    itemId?: string;
    itemKey: string;
    onClose?: Function;
    type?: string;
    defaultValue?: unknown;
    autotranslatable?: string;
}

export default TranslationsDrawerContent;

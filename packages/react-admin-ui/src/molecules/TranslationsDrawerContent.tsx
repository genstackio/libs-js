import { useCallback, useEffect, useState } from 'react';
import TranslationsForm from './forms/TranslationsForm';
import useTranslationLocalesContext from '@genstackio/react-contexts/lib/hooks/useTranslationLocalesContext';
import Spinner from '../atoms/Spinner';
import { useTranslation } from 'react-i18next';

export function TranslationsDrawerContent({ itemType, itemId, onClose, type }: TranslationsDrawerContentProps) {
    const { t } = useTranslation();
    const { locales, saveItem, getItem, getFlagIconUrl } = useTranslationLocalesContext();
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

        const p = getItem(itemType, itemId);
        p.then((data) => {
            setState({ called: true, data, loading: false, error: undefined });
        });
        p.catch((e: any) => {
            setState({ called: true, data: undefined, loading: false, error: e });
        });
    }, [setState, data, called, getItem]);

    const onSubmit = useCallback(
        (data: any) => {
            const p = saveItem(itemType, itemId, data);
            p.then(() => {
                onClose?.();
            });
            p.catch((e: any) => {
                console.error(e);
                onClose?.();
            });
        },
        [onClose, saveItem, itemId, itemType],
    );

    if (!data || loading) return <Spinner />;

    return (
        <div className={'w-full flex flex-col justify-between items-center gap-4'}>
            <div className={'w-full rounded-md p-4 text-left bg-light flex flex-col gap-2'}>
                <p className={'font-semibold'}>{t('translations_form_default_value')}</p>
            </div>
            {!locales?.length ? (
                <div>{t('translations_form_no_locales')}</div>
            ) : (
                <>
                    <TranslationsForm
                        locales={locales}
                        onSubmit={onSubmit}
                        defaultValues={data as any}
                        getFlagIconUrl={getFlagIconUrl}
                        onCancel={onClose}
                        type={type}
                    />
                </>
            )}
        </div>
    );
}

export interface TranslationsDrawerContentProps {
    itemType: string;
    itemId: string;
    onClose?: Function;
    type?: string;
}

export default TranslationsDrawerContent;

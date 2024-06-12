import { useMemo } from 'react';
import { BaseFormProps } from './BaseForm';
import { useTranslation } from 'react-i18next';
import TranslationLocaleTextField from '../../atoms/fields/TranslationLocaleTextField';
import Button from '../../atoms/Button';
import useNestedForm from '../../hooks/useNestedForm';
import { ReferenceTranslationContextProvider } from '@genstackio/react-contexts/lib/contexts/ReferenceTranslationContext';

const defaultLocales: string[] = [];

export function TranslationsForm({
    locales = defaultLocales,
    getFlagIconUrl,
    onCancel,
    type,
    defaultValues,
    referenceValue = undefined,
    referenceLocale,
    autotranslatable,
    ...props
}: TranslationsFormProps) {
    const { t } = useTranslation();
    const { Form, SubmitButton, field } = useNestedForm({ ...props, value: defaultValues });
    const rtcpv = useMemo(() => ({ referenceValue, referenceLocale }), [referenceValue, referenceLocale]);

    return (
        <Form>
            <div className={'w-full flex flex-col gap-2'}>
                <ReferenceTranslationContextProvider value={rtcpv}>
                    {locales.map((l, i) => (
                        <TranslationLocaleTextField
                            key={i}
                            locale={l}
                            {...field}
                            iconUrl={getFlagIconUrl?.(l)}
                            type={type}
                            autoFocus={i === 0}
                            autotranslatable={autotranslatable}
                        />
                    ))}
                </ReferenceTranslationContextProvider>
                <div className={'w-full flex items-center place-items-center gap-2 pt-8'}>
                    <SubmitButton
                        mt={'none'}
                        className={'flex-1 sm:flex-grow-0 sm:w-auto mt-0'}
                        label={t('translations_form_button_save_label')}
                    />
                    <div className={'flex-1 sm:flex-grow-0 sm:w-auto'}>
                        <Button
                            onClick={onCancel as any}
                            variant={'filled'}
                            color={'secondary'}
                            label={t('form_generic_cancel_label')}
                        />
                    </div>
                </div>
            </div>
        </Form>
    );
}

export interface TranslationsFormProps extends BaseFormProps {
    locales?: string[];
    getFlagIconUrl?: Function;
    mainValue?: string;
    onCancel?: Function;
    type?: string;
    referenceValue?: string;
    referenceLocale: string;
    autotranslatable?: string;
}

// noinspection JSUnusedGlobalSymbols
export default TranslationsForm;

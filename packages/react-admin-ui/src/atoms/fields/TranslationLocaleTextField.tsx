import TextField, { TextFieldProps } from './TextField';
import { useTranslation } from 'react-i18next';
import Image from '../Image';
import { useMemo } from 'react';
import TextareaField from './TextareaField';

export function TranslationLocaleTextField({ locale, iconUrl, type, ...props }: TranslationLocaleTextFieldProps) {
    const { t } = useTranslation();

    const Comp = useMemo(() => {
        switch (type) {
            case 'textarea':
                return TextareaField;
            default:
                return TextField;
        }
    }, [type]);

    return (
        <div className={'w-full flex place-items-end justify-start items-start gap-2'}>
            <div className={'flex-1 w-full'}>
                <Comp
                    kind={'translationLocale'}
                    {...props}
                    name={locale}
                    label={t(`locale_${locale.toLowerCase()}`, locale)}
                    className={'flex-1'}
                    labelPrefixContent={
                        !!iconUrl && (
                            <div className={'w-4'}>
                                <Image url={iconUrl} expand={false} className={'rounded-sm overflow-hidden border'} />
                            </div>
                        )
                    }
                />
            </div>
        </div>
    );
}

export interface TranslationLocaleTextFieldProps extends TextFieldProps {
    locale: string;
    iconUrl?: string;
}

// noinspection JSUnusedGlobalSymbols
export default TranslationLocaleTextField;

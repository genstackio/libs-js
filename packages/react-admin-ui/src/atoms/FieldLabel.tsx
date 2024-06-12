import clsx from 'clsx';
import { flag } from '../types';
import { AsComponent } from '../as';
import { WithName, WithLabel, WithOptions, WithTranslatable, WithTranslationGeneratable } from '../withs';
import useTranslatable from '../hooks/useTranslatable';
import { useTranslation } from 'react-i18next';

const stylings: any = {
    defaults: { format: 'upperfirst' },
    formats: {
        capital: 'capitalize',
        normal: '',
        uppercase: 'uppercase',
        lowercase: 'lowercase',
        upperfirst: '',
    },
};

export function FieldLabel({
    className,
    error,
    label,
    name,
    translatable = false,
    translatableType,
    translationGeneratable = false,
    format = stylings.defaults.format,
    labelPrefixContent,
    options = {},
}: FieldLabelProps) {
    const { t } = useTranslation();
    const [onToggleTranslatableModal, translatableChildren] = useTranslatable(
        name,
        'string' === typeof translatable ? translatable : false === translatable ? '' : `.${name}`,
        translatableType,
        'string' === typeof translationGeneratable
            ? translationGeneratable
            : false === translationGeneratable
            ? ''
            : `.${name}`,
    );

    if (!label) return null;

    label =
        'upperfirst' === format && 'string' === typeof label
            ? `${label.slice(0, 1).toUpperCase()}${label.slice(1)}`
            : label;

    let content = (
        <>
            {!!labelPrefixContent && (
                <div className={'inline flex gap-1 items-center'}>
                    {labelPrefixContent} {label} {!!options?.required && '*'}
                </div>
            )}
            {!labelPrefixContent && label}
            {!labelPrefixContent && !!options?.required && '*'}
        </>
    );

    if (!translatable) content = <span>{content}</span>;

    return (
        <>
            <label
                htmlFor={name}
                className={clsx(
                    'mb-1 text-sm tracking-wide text-dark',
                    stylings.formats[format || stylings.defaults.format],
                    options.required && 'font-bold',
                    error && 'text-danger',
                    !!translatable && 'flex justify-between items-center',
                    className,
                )}
            >
                {content}
                {!!translatable && (
                    <p onClick={onToggleTranslatableModal as any} className={'cursor-pointer hover:underline'}>
                        {t('translations')}
                    </p>
                )}
            </label>
            {translatableChildren}
        </>
    );
}

export interface FieldLabelProps
    extends AsComponent,
        Required<WithName>,
        WithLabel,
        WithOptions,
        WithTranslatable,
        WithTranslationGeneratable {
    error?: flag;
    format?: 'normal' | 'capital' | 'uppercase' | 'lowercase' | 'upperfirst';
    translatableType?: string;
    labelPrefixContent?: any;
}

// noinspection JSUnusedGlobalSymbols
export default FieldLabel;

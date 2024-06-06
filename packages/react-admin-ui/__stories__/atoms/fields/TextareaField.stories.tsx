import { args, s, a } from '../../utils';
import { TextareaField } from '../../../src';
import { TranslationLocalesContextProvider } from '@genstackio/react-contexts/lib/contexts/TranslationLocalesContext';

export default {
    title: 'Atoms/fields/TextareaField',
    component: TextareaField,
    argTypes: a({
        disabled: args.disabled,
        label: args.label,
        placeholder: args.placeholder,
        register: args._disabled,
        type: args.fieldType,
        errors: args._disabled,
        defaultValues: args._disabled,
        onChange: args._disabled,
        options: args._disabled,
        value: args.fieldValue,
        rows: args.rows,
        kind: args._disabled,
    }),
};

const TranslatableAwareTextareaField = (props: any) => {
    const value = {
        locales: ['fr_FR', 'en_GB'],
        getFlagIconUrl: (locale: string) =>
            !!locale
                ? `https://statics.gotombola.co/tenants/gotombola/images/icons/flags/4x3/${locale
                      .split('_')[1]
                      ?.toLowerCase()}.svg`
                : undefined,
        getItem: async (itemType: string, itemId: string | undefined, itemKey: string, options?: Record<string, unknown>): Promise<unknown> => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve({});
                }, 1000);
            });
        },
        saveItem: async (
            itemType: string,
            itemId: string | undefined,
            itemKey: string,
            data: Record<string, unknown>,
            options?: Record<string, unknown>,
        ): Promise<unknown> => {
            alert(
                JSON.stringify(
                    {
                        itemType,
                        itemId,
                        itemKey,
                        data,
                        options,
                    },
                    null,
                    4,
                ),
            );
            return undefined;
        },
    };

    return (
        <TranslationLocalesContextProvider value={value}>
            <TextareaField {...props} />
        </TranslationLocalesContextProvider>
    );
};

export const basic = s(TextareaField, {});

export const withTranslatable = s(TranslatableAwareTextareaField, {
    translatable: true,
});

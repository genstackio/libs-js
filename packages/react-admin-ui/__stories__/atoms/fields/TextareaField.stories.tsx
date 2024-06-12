import { args, s, a } from '../../utils';
import { TextareaField } from '../../../src';
import { TranslationLocalesContextProvider } from '@genstackio/react-contexts/lib/contexts/TranslationLocalesContext';
import useForm from '../../../src/hooks/useForm';
import { GenerateContextProvider } from '@genstackio/react-contexts/lib/contexts/GenerateContext';
import { TranslateContextProvider } from '@genstackio/react-contexts/lib/contexts/TranslateContext';

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
        getItem: async (
            itemType: string,
            itemId: string | undefined,
            itemKey: string,
            options?: Record<string, unknown>,
        ): Promise<unknown> => {
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

    const { Form, field } = useForm({}, 'generatable');

    return (
        <Form>
            <TranslationLocalesContextProvider value={value}>
                <TextareaField {...props} {...field} />
            </TranslationLocalesContextProvider>
        </Form>
    );
};

const TranslatableAwareAndTranslationGeneratableTextareaField = (props: any) => {
    const value = {
        locales: ['fr_FR', 'en_GB'],
        getFlagIconUrl: (locale: string) =>
            !!locale
                ? `https://statics.gotombola.co/tenants/gotombola/images/icons/flags/4x3/${locale
                      .split('_')[1]
                      ?.toLowerCase()}.svg`
                : undefined,
        getItem: async (
            itemType: string,
            itemId: string | undefined,
            itemKey: string,
            options?: Record<string, unknown>,
        ): Promise<unknown> => {
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

    const value0 = {
        referenceLocale: 'fr_FR',
        translateItem: async (_: string, text: string, sourceLocale: string, targetLocale: string): Promise<unknown> => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(`this is the translated text of "${text}" from ${sourceLocale} to ${targetLocale}`);
                }, 1000);
            });
        },
    };

    const { Form, field } = useForm({}, 'generatable');

    return (
        <Form>
            <TranslateContextProvider value={value0}>
                <TranslationLocalesContextProvider value={value}>
                    <TextareaField {...props} {...field} />
                </TranslationLocalesContextProvider>
            </TranslateContextProvider>
        </Form>
    );
};

const GeneratableAwareTextareaField = (props: any) => {
    const { Form, field } = useForm({}, 'generatable');
    const value = {
        generateItem: async (name: string): Promise<unknown> => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve('Hello');
                }, 1000);
            });
        },
    };

    return (
        <Form>
            <GenerateContextProvider value={value}>
                <TextareaField {...props} {...field} />
            </GenerateContextProvider>
        </Form>
    );
};

export const basic = s(TextareaField, {});

export const withTranslatable = s(TranslatableAwareTextareaField, {
    translatable: true,
});
export const withTranslatableAndTranslationGeneratable = s(TranslatableAwareAndTranslationGeneratableTextareaField, {
    translatable: true,
    translationGeneratable: true,
});

export const withGeneratable = s(GeneratableAwareTextareaField, {
    generatable: true,
});

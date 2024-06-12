import { args, s, a } from '../../utils';
import { TextField } from '../../../src';
import { TranslationLocalesContextProvider } from '@genstackio/react-contexts/lib/contexts/TranslationLocalesContext';
import { GenerateContextProvider } from '@genstackio/react-contexts/lib/contexts/GenerateContext';
import useForm from '../../../src/hooks/useForm';
import { TranslateContextProvider } from '@genstackio/react-contexts/lib/contexts/TranslateContext';

export default {
    title: 'Atoms/fields/TextField',
    component: TextField,
    argTypes: a({
        classes: args.classes,
        disabled: args.disabled,
        label: args.label,
        placeholder: args.placeholder,
        register: args._disabled,
        type: args.fieldType,
        errors: args._disabled,
        defaultValues: args._disabled,
        onChange: args._disabled,
        options: args._disabled,
        value: args._disabled,
        kind: args._disabled,
        variant: args.fieldVariant,
    }),
};

const TranslatableAwareTextField = (props: any) => {
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
                <TextField {...props} {...field} />
            </TranslationLocalesContextProvider>
        </Form>
    );
};
const TranslatableAwareAndTranslationGeneratableTextField = (props: any) => {
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
                    <TextField {...props} {...field} />
                </TranslationLocalesContextProvider>
            </TranslateContextProvider>
        </Form>
    );
};

const GeneratableAwareTextField = (props: any) => {
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
                <TextField {...props} {...field} />
            </GenerateContextProvider>
        </Form>
    );
};

export const basic = s(TextField, {});

export const inlined = s(TextField, { inline: true });

export const withPrepend = s(
    (args) => (
        <div>
            <TextField prepend={'@'} {...args} />
            <TextField prepend={'hello'} {...args} />
            <TextField prependIcon={'people'} {...args} />
        </div>
    ),
    {},
);

export const withAppend = s(TextField, {
    append: 'units',
});

export const withPrependAndAppend = s(TextField, {
    prepend: <p>Hello&nbsp;world</p>,
    append: <p>Bye&nbsp;bye</p>,
});

export const showcase = s(
    (props) => (
        <div>
            <TextField {...props} />
            <TextField {...props} errors={{ all: true }} />
            <TextField {...props} placehoder={'field_generic_required_placeholder'} required />
            <TextField {...props} placehoder={'field_generic_disabled_placeholder'} disabled />
        </div>
    ),
    {
        label: 'The field',
        placeholder: 'This is a custom placeholder',
    },
);

export const withTranslatable = s(TranslatableAwareTextField, {
    translatable: true,
});
export const withTranslatableAndTranslationGeneratable = s(TranslatableAwareAndTranslationGeneratableTextField, {
    translatable: true,
    translationGeneratable: true,
});

export const withGeneratable = s(GeneratableAwareTextField, {
    generatable: true,
});

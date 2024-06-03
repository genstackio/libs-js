import { args, s, a } from '../../utils';
import TranslationsForm from '../../../src/molecules/forms/TranslationsForm';

export default {
    title: 'Molecules/forms/TranslationsForm',
    component: TranslationsForm,
    argTypes: a({
        onSubmit: args._disabled,
        defaultValues: args._disabled,
    }),
};

export const basic = s(TranslationsForm, {
    onSubmit: (v) => alert(JSON.stringify(v, null, 4)),
    locales: ['fr_FR', 'en_GB'],
});

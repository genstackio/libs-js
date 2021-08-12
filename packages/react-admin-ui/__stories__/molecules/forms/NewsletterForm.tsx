import { args, a, s } from '../../utils';
import { NewsletterForm } from '../../../src/';

export default {
    title: 'Molecules/forms/NewsletterForm',
    component: NewsletterForm,
    argTypes: a({
        color: args.color,
        onSubmit: args._disabled,
        defaultValues: args._disabled,
        variant: args._disabled,
    }),
};

export const basic = s(NewsletterForm, {});

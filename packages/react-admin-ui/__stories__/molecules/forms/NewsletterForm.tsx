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

const Template = (args) => <NewsletterForm {...args} />;

export const basic = s(Template, {});

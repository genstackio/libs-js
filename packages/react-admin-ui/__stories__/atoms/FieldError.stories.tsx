import { args, s, a } from '../utils';
import { FieldError } from '../../src';

export default {
    title: 'Atoms/FieldError',
    component: FieldError,
    argTypes: a({
        error: args.text,
    }),
};

const Template = (args) => <FieldError {...args} />;

export const basic = s(Template, {
    error: 'Field Error'
});

import { args, s, a } from '../utils';
import { FieldGroup } from '../../src';

export default {
    title: 'Atoms/FieldGroup',
    component: FieldGroup,
    argTypes: a({
        children: args.text,
    }),
};

const Template = (args) => <FieldGroup {...args} />;

export const basic = s(Template, {
    children: 'Field Group',
});

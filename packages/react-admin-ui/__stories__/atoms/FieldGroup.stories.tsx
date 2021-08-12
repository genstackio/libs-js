import { args, s, a } from '../utils';
import { FieldGroup } from '../../src';
import data from '../data';

export default {
    title: 'Atoms/FieldGroup',
    component: FieldGroup,
    argTypes: a({
        children: args.text,
    }),
};

const Template = (args) => <FieldGroup {...args} />;

export const basic = s(Template, {
    children: data.common.content,
});

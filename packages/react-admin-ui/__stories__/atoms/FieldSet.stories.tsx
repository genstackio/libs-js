import { args, s, a } from '../utils';
import { FieldSet } from '../../src';

export default {
    title: 'Atoms/FieldSet',
    component: FieldSet,
    argTypes: a({
        error: args.text,
        helper: args.text,
        label: args.text,
        name: args.text,
    }),
};

const Template = (args) => <FieldSet {...args} />;

export const basic = s(Template, {
    error: 'Field Error',
    helper: 'Field Helper',
    label: 'Field Label',
    name: 'Label Name',
    options: '',
});

export const children = s(Template, {
    children: ' Children we are',
    error: 'Field Error',
    helper: 'Field Helper',
    label: 'Field Label',
    name: 'Label Name',
    options: '',
});

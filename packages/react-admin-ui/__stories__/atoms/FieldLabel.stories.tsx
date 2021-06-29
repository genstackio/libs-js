import { args, s, a } from '../utils';
import { FieldLabel } from '../../src';

export default {
    title: 'Atoms/FieldLabel',
    component: FieldLabel,
    argTypes: a({
        label: args.text,
        name: args.text,
    }),
};

const Template = (args) => <FieldLabel {...args} />;

export const basic = s(Template, {
    label: 'Field Label',
    name: 'Label Name',
});

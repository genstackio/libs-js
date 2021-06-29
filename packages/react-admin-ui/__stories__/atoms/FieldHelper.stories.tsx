import { args, s, a } from '../utils';
import { FieldHelper } from '../../src';

export default {
    title: 'Atoms/FieldHelper',
    component: FieldHelper,
    argTypes: a({
        helper: args.text,
    }),
};

const Template = (args) => <FieldHelper {...args} />;

export const basic = s(Template, {
    helper: 'Field Helper',
});

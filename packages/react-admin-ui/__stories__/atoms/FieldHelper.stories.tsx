import { args, s, a } from '../utils';
import { FieldHelper } from '../../src';
import data from '../data';

export default {
    title: 'Atoms/FieldHelper',
    component: FieldHelper,
    argTypes: a({
        helper: args.text,
    }),
};

const Template = (args) => <FieldHelper {...args} />;

export const basic = s(Template, {
    helper: data.common.helper,
});

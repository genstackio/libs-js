import { args, s, a } from '../utils';
import { InfosItem } from '../../src';

export default {
    title: 'Atoms/InfosItem',
    component: InfosItem,
    argTypes: a({
        label: args.label,
        value: args.value,
    }),
};

const Template = (args) => <InfosItem {...args} />;

export const basic = s(Template, {
    label: 'My label',
    value: 'Its value',
});

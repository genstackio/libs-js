import { args, s, a } from '../utils';
import { InfosItem } from '../../src';
import data from '../data';

export default {
    title: 'Atoms/InfosItem',
    component: InfosItem,
    argTypes: a({
        label: args.label,
        value: args.value,
    }),
};

export const basic = s(InfosItem, {
    label: data.common.property,
    value: data.common.value,
});

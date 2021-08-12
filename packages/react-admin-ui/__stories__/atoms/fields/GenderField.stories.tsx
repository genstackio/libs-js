import { args, s, a } from '../../utils';
import { GenderField } from '../../../src';

export default {
    title: 'Atoms/fields/GenderField',
    component: GenderField,
    argTypes: a({
        color: args.color,
        variant: args.blockVariant,
    }),
};

export const basic = s(GenderField, {});

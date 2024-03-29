import { args, s, a } from '../utils';
import { BulletPoint } from '../../src';
import data from '../data';

export default {
    title: 'Molecules/BulletPoint',
    component: BulletPoint,
    argTypes: a({
        icon: args.icon,
        title: args.title,
        text: args.text,
        color: args.color,
        variant: args.textVariant,
    }),
};

export const basic = s(BulletPoint, {
    icon: data.common.icon,
    title: data.common.title,
    text: data.common.content,
});

import PushArgument from '../../src/molecules/PushArgument';
import { args, a, s } from '../utils';
import data from '../data';

export default {
    title: 'Molecules/PushArgument',
    component: PushArgument,
    argTypes: a({
        title: args.title,
        subtitle: args.subtitle,
        image: args.image,
    }),
};

export const imageLeft = s(PushArgument, {
    title: data.common.title,
    subtitle: data.common.subtitle,
    image: data.common.image,
    image2: data.common.image2,
    btnLabel: data.buttons.button1.label,
    btnTarget: data.buttons.button1.target,
    imagePosition: 'left',
});

export const imageRight = s(PushArgument, {
    title: data.common.title,
    subtitle: data.common.subtitle,
    image: data.common.image,
    image2: data.common.image2,
    btnLabel: data.buttons.button1.label,
    btnTarget: data.buttons.button1.target,
    imagePosition: 'right',
});

export const imageLeftWithoutButton = s(PushArgument, {
    title: data.common.title,
    subtitle: data.common.subtitle,
    image: data.common.image,
    image2: data.common.image2,
    imagePosition: 'left',
});

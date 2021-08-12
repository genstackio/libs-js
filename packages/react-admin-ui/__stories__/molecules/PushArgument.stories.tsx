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

const Template = (args) => <PushArgument {...args} />;

export const imageLeft = s(Template, {
    title: data.common.title,
    subtitle: data.common.subtitle,
    image: data.common.image,
    image2: data.common.image2,
    btnLabel: data.buttons.button1.label,
    btnTarget: data.buttons.button1.target,
    imagePosition: 'left',
});

export const imageRight = s(Template, {
    title: data.common.title,
    subtitle: data.common.subtitle,
    image: data.common.image,
    image2: data.common.image2,
    btnLabel: data.buttons.button1.label,
    btnTarget: data.buttons.button1.target,
    imagePosition: 'right',
});

export const imageLeftWithoutButton = s(Template, {
    title: data.common.title,
    subtitle: data.common.subtitle,
    image: data.common.image,
    image2: data.common.image2,
    imagePosition: 'left',
});

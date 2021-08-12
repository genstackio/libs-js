import { args, s, a } from '../utils';
import PushSmall from '../../src/molecules/PushSmall';
import data from '../data';

export default {
    title: 'Molecules/PushSmall',
    component: PushSmall,
    argTypes: a({
        items: args.items,
        color: args.color,
        variant: args.accordionVariant,
    }),
};

const Template = (args) => <PushSmall {...args} />;

export const basic = s(Template, {
    title: data.common.title,
    items: [
        {
            title: data.common.title,
            subtitle: data.common.subtitle,
            label: data.common.description,
            btnLabel: data.buttons.button1.label,
            btnTarget: data.buttons.button1.target,
            btn2Label: data.buttons.button2.label,
            btn2Target: data.buttons.button2.target,
            image: data.common.image,
        },
        {
            title: data.common.title2,
            subtitle: data.common.subtitle2,
            label: data.common.description2,
            btnLabel: data.buttons.button1.label,
            btnTarget: data.buttons.button1.target,
            btn2Label: data.buttons.button2.label,
            btn2Target: data.buttons.button2.target,
            image: data.common.image2,
        },
    ],
});

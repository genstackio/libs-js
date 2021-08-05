import { args, s, a } from '../utils';
import PushSmall from '../../src/molecules/PushSmall';

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
    title: 'Pour aller plus loin',
    items: [
        {
            title: 'Title',
            subtitle: 'Subtitle',
            label: 'Compatible Mac et Pc',
            btnLabel: 'Button Label',
            btnTarget: 'https://www.google.fr',
            btn2Label: 'Télécharger',
            btn2Target: 'https://www.google.fr',
            image: {
                url: 'https://via.placeholder.com/500',
            },
        },
        {
            title: 'Title',
            subtitle: 'Subtitle',
            label: 'Application mobile iOS et Android',
            btnLabel: 'Télécharger',
            btnTarget: 'https://www.google.fr',
            btn2Label: 'Découvrir',
            btn2Target: 'https://www.google.fr',
            image: {
                url: 'https://via.placeholder.com/500',
            },
        },
    ],
});

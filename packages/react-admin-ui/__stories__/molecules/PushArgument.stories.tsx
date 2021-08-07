import PushArgument from '../../src/molecules/PushArgument';
import { args, a, s } from '../utils';

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
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    subtitle:
        'Sit vestibulum odio morbi egestas vitae scelerisque eu risus. A, erat laoreet nisl, diam adipiscing nibh ' +
        'vitae quis cras.',
    image: {
        url: 'https://picsum.photos/200/200',
    },
    image2: {
        url: 'https://picsum.photos/200/200',
        mobile: {
            url: 'https://picsum.photos/200/200',
        },
    },
    btnLabel: 'button',
    btnTarget: 'https://www.google.fr',
    imagePosition: 'left',
});

export const imageRight = s(Template, {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    subtitle:
        'Sit vestibulum odio morbi egestas vitae scelerisque eu risus. A, erat laoreet nisl, diam adipiscing nibh ' +
        'vitae quis cras.',
    image: {
        url: 'https://picsum.photos/200/200',
    },
    image2: {
        url: 'https://picsum.photos/200/200',
        mobile: {
            url: 'https://picsum.photos/200/200',
        },
    },
    btnLabel: 'button',
    btnTarget: 'https://www.google.fr',
    imagePosition: 'right',
});

export const imageLeftWithoutButton = s(Template, {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    subtitle:
        'Sit vestibulum odio morbi egestas vitae scelerisque eu risus. A, erat laoreet nisl, diam adipiscing nibh ' +
        'vitae quis cras.',
    image: {
        url: 'https://picsum.photos/200/200',
    },
    image2: {
        url: 'https://picsum.photos/200/200',
        mobile: {
            url: 'https://picsum.photos/200/200',
        },
    },
    imagePosition: 'left',
});

import { ArgumentBlock } from '../../src/molecules/ArgumentBlock';
import { args, a, s } from '../utils';

export default {
    title: 'Molecules/ArgumentBlock',
    component: ArgumentBlock,
    argTypes: a({
        title: args.title,
        subtitle: args.subtitle,
        btnLabel: args.btnLabel,
        image: args.image,
    }),
};

const Template = (args) => <ArgumentBlock {...args} />;

export const basic = s(Template, {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    subtitle:
        'Sit vestibulum odio morbi egestas vitae scelerisque eu risus. A, erat laoreet nisl, diam adipiscing nibh ' +
        'vitae quis cras.',
    btnLabel: 'En savoir plus',
    btnTarget: 'https://www.google.fr',
    image: { url: 'https://picsum.photos/200/200' },
});

export const withButtons = s(Template, {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    subtitle:
        'Sit vestibulum odio morbi egestas vitae scelerisque eu risus. A, erat laoreet nisl, diam adipiscing nibh ' +
        'vitae quis cras.',
    btnLabel: 'En savoir plus',
    btnTarget: 'https://www.google.fr',
    image: { url: 'https://picsum.photos/200/200' },
    btn2Label: 'En savoir ENCORE plus',
    btn2Target: 'https://www.google.com',
    btn2Type: 'outlined',
});

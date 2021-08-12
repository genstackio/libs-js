import { args, a, s } from '../utils';
import Slideshow from '../../src/organisms/Slideshow';

export default {
    title: 'Organisms/Slideshow',
    component: Slideshow,
    argTypes: a({
        title: args.title,
        subtitle: args.subtitle,
        text: args.text,
        image: args.image,
        color: args.color,
    }),
};

export const basic = s(Slideshow, {
    title: 'Bienvenue ! ',
    text: 'Vous pouvez insérer du texte ici...',
    subtitle: 'Quelques exemples de stickers :',
    slides: [
        { image: { url: 'https://via.placeholder.com/687x426?text=Image' } },
        { image: { url: 'https://via.placeholder.com/687x426?text=Image' } },
        { image: { url: 'https://via.placeholder.com/687x426?text=Image' } },
        { image: { url: 'https://via.placeholder.com/687x426?text=Image' } },
        { image: { url: 'https://via.placeholder.com/687x426?text=Image' } },
        { image: { url: 'https://via.placeholder.com/687x426?text=Image' } },
        { image: { url: 'https://via.placeholder.com/687x426?text=Image' } },
    ],
});

export const withBgImage = s(Slideshow, {
    title: 'Bienvenue ! ',
    text: 'Vous pouvez insérer du texte ici...',
    subtitle: 'Quelques exemples de stickers :',
    slides: [
        { image: { url: 'https://via.placeholder.com/687x426?text=Image' } },
        { image: { url: 'https://via.placeholder.com/687x426?text=Image' } },
        { image: { url: 'https://via.placeholder.com/687x426?text=Image' } },
        { image: { url: 'https://via.placeholder.com/687x426?text=Image' } },
        { image: { url: 'https://via.placeholder.com/687x426?text=Image' } },
        { image: { url: 'https://via.placeholder.com/687x426?text=Image' } },
        { image: { url: 'https://via.placeholder.com/687x426?text=Image' } },
    ],
    image: { url: 'https://via.placeholder.com/687x426?text=Image' },
});

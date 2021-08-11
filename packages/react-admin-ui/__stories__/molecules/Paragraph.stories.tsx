import { s, a, args } from '../utils';
import { Paragraph } from '../../src';

export default {
    title: 'Molecules/Paragraph',
    component: Paragraph,
    argTypes: a({
        title: args.title,
        text: args.text,
        color: args.color,
        btnLabel: args.btnLabel,
        btnTarget: args.target,
        image: { control: { type: 'object' } },
        imageLeft: { control: { type: 'boolean' } },
    }),
};

const Template = (args) => <Paragraph {...args} />;

export const basic = s(Template, {
    title: 'Bienvenue chez Gotombola',
    text: "Nous voulons permettre à toutes les associations de s'auto-financer rapidement et facilement grâce à la tombola augmentée par le digital. Pour aider un maximum d'associations, nous ne pensons pas que la rupture 100% digitale soit adaptée. Nous vous accompagnons en combinant outils digitaux et traditionnels pour ne mettre personne de côté. Commencez à promouvoir votre tombola plus efficacement en créant gratuitement votre sticker digital GoTombola.",
});

export const withImage = s(Template, {
    title: 'Bienvenue chez Gotombola',
    text: "Nous voulons permettre à toutes les associations de s'auto-financer rapidement et facilement grâce à la tombola augmentée par le digital. Pour aider un maximum d'associations, nous ne pensons pas que la rupture 100% digitale soit adaptée. Nous vous accompagnons en combinant outils digitaux et traditionnels pour ne mettre personne de côté. Commencez à promouvoir votre tombola plus efficacement en créant gratuitement votre sticker digital GoTombola.",
    image: { url: 'https://via.placeholder.com/687x426?text=Image' },
});

export const withImageLeft = s(Template, {
    title: 'Bienvenue chez Gotombola',
    text: "Nous voulons permettre à toutes les associations de s'auto-financer rapidement et facilement grâce à la tombola augmentée par le digital. Pour aider un maximum d'associations, nous ne pensons pas que la rupture 100% digitale soit adaptée. Nous vous accompagnons en combinant outils digitaux et traditionnels pour ne mettre personne de côté. Commencez à promouvoir votre tombola plus efficacement en créant gratuitement votre sticker digital GoTombola.",
    image: { url: 'https://via.placeholder.com/687x426?text=Image' },
    imageLeft: true,
});

export const withButton = s(Template, {
    title: 'Bienvenue chez Gotombola',
    text: "Nous voulons permettre à toutes les associations de s'auto-financer rapidement et facilement grâce à la tombola augmentée par le digital. Pour aider un maximum d'associations, nous ne pensons pas que la rupture 100% digitale soit adaptée. Nous vous accompagnons en combinant outils digitaux et traditionnels pour ne mettre personne de côté. Commencez à promouvoir votre tombola plus efficacement en créant gratuitement votre sticker digital GoTombola.",
    image: { url: 'https://via.placeholder.com/687x426?text=Image' },
    btnLabel: 'About Us',
    btnTarget: 'https://google.fr',
});

export const withButtons = s(Template, {
    title: 'Bienvenue chez Gotombola',
    text: "Nous voulons permettre à toutes les associations de s'auto-financer rapidement et facilement grâce à la tombola augmentée par le digital. Pour aider un maximum d'associations, nous ne pensons pas que la rupture 100% digitale soit adaptée. Nous vous accompagnons en combinant outils digitaux et traditionnels pour ne mettre personne de côté. Commencez à promouvoir votre tombola plus efficacement en créant gratuitement votre sticker digital GoTombola.",
    image: { url: 'https://via.placeholder.com/687x426?text=Image' },
    btnLabel: 'About Us',
    btnTarget: 'https://google.fr',
    btn2Label: 'ClickMe',
    btn3Label: 'Button',
});

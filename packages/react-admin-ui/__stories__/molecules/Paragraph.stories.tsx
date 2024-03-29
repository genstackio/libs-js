import { s, a, args } from '../utils';
import { Paragraph } from '../../src';
import data from '../data';

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

export const basic = s(Paragraph, {
    title: data.common.title,
    text: data.common.content,
});

export const withImage = s(Paragraph, {
    title: data.common.title,
    text: data.common.content,
    image: data.common.image,
});

export const withImageLeft = s(Paragraph, {
    title: data.common.title,
    text: data.common.content,
    image: data.common.image,
    imageLeft: true,
});

export const withButton = s(Paragraph, {
    title: data.common.title,
    text: data.common.content,
    image: data.common.image,
    btnLabel: data.buttons.button1.label,
    btnTarget: data.buttons.button1.target,
});

export const withButtons = s(Paragraph, {
    title: data.common.title,
    text: data.common.content,
    image: data.common.image,
    btnLabel: data.buttons.button1.label,
    btnTarget: data.buttons.button1.target,
    btn2Label: data.buttons.button2.label,
    btn3Label: data.buttons.button3.label,
});

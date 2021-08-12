import Quotes from '../../src/molecules/Quotes';
import { args, a, s } from '../utils';
import data from '../data';

export default {
    title: 'Molecules/Quotes',
    component: Quotes,
    argTypes: a({
        items: args.items,
    }),
};

const item = {
    image: data.common.image,
    overline: data.common.overline,
    title: data.common.title,
    buttonLabel: data.buttons.button1.label,
    buttonTarget: data.buttons.button1.target,
};
const item2 = {
    overline: data.common.overline2,
    title: data.common.title2,
};
const item3 = {
    image: data.common.image2,
    overline: data.common.overline3,
    title: data.common.title3,
    buttonLabel: data.buttons.button3.label,
    buttonTarget: data.buttons.button3.target,
};

export const basic = s(Quotes, {
    title: data.common.title,
    btnLabel: data.buttons.button1.label,
    btnTarget: data.buttons.button1.target,
    items: [item],
});

export const withItems = s(Quotes, {
    title: data.common.title,
    btnLabel: data.buttons.button1.label,
    btnTarget: data.buttons.button1.target,
    items: [item, item2, item3, item, item2, item3],
});

export const withButtonEndIcon = s(Quotes, {
    title: data.common.title,
    btnLabel: data.buttons.button1.label,
    btnTarget: data.buttons.button1.target,
    btnEndIcon: 'fa-fas--arrow-right',
    items: [item],
});

export const withButtonIcon = s(Quotes, {
    title: data.common.title,
    btnLabel: data.buttons.button1.label,
    btnTarget: data.buttons.button1.target,
    btnIcon: 'fa-fas--arrow-right',
    items: [item],
});

export const withoutButton = s(Quotes, {
    title: data.common.title,
    items: [item],
});

export const withoutTitle = s(Quotes, {
    btnLabel: data.buttons.button1.label,
    btnTarget: data.buttons.button1.target,
    items: [item],
});

export const justItem = s(Quotes, { items: [item] });

export const justItems = s(Quotes, { items: [item, item2, item3] });

import ItemCarroussel from '../../src/organisms/ItemCarroussel';
import { args, a, s } from '../utils';
import data from '../data';

export default {
    title: 'Organisms/ItemCarroussel',
    component: ItemCarroussel,
    argTypes: a({
        items: args.items,
        title: args.title,
    }),
};

const item0 = {
    title: data.item.title,
    label: data.common.label,
    btnLabel: data.buttons.button1.label,
    btnTarget: data.buttons.button1.target,
    buttonType: 'tertiary',
    image: data.common.image,
};

const item1 = {
    title: data.item.title,
    label: data.common.label,
    btnLabel: data.buttons.button1.label,
    btnTarget: data.buttons.button1.target,
    buttonType: 'tertiary',
    image: data.common.image,
};

const item2 = {
    title: data.item.title,
    label: data.common.label,
    btnLabel: data.buttons.button1.label,
    btnTarget: data.buttons.button1.target,
    btnTarget2: data.buttons.button2.target,
    buttonType: 'tertiary',
    image: data.common.image,
};

const item3 = {
    title: data.item.title,
    label: data.common.label,
    btnLabel: data.buttons.button1.label,
    btnTarget: data.buttons.button1.target,
    btnTarget2: data.buttons.button2.target,
    buttonType: 'tertiary',
    image: data.common.image,
};

const item4 = {
    btnLabel: data.buttons.button1.label,
    btnTarget: data.buttons.button1.target,
    image: data.common.image,
};

export const basic = s(ItemCarroussel, {
    title: data.common.title,
    items: [item0, item1, item2],
});

export const manyManyItemsWithInfosOnFirst = s(ItemCarroussel, {
    title: data.common.title,
    items: [item3, item1, item2, item0, item1, item2, item0, item1, item2, item0, item1, item2],
});

export const manyManyItemsWithNoInfosOnFirst = s(ItemCarroussel, {
    title: data.common.title,
    items: [item4, item1, item2, item0, item1, item2, item0, item1, item2, item0, item1, item2],
});

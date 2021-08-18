import ItemCarrousselItem from '../../src/organisms/ItemCarrousselItem';
import { args, a, s } from '../utils';
import data from '../data';

export default {
    title: 'Organisms/ItemCarrousselItem',
    component: ItemCarrousselItem,
    argTypes: a({
        title: args.title,
        label: args.label,
        btnLabel: args.btnLabel,
        btnTarget: args.target,
        image: args.image,
    }),
};

const item0 = {
    title: data.item.title,
    label: data.common.label,
    image: data.common.image,
    btnLabel: data.buttons.button1.label,
    btnTarget: data.buttons.button1.target,
    buttonType: 'tertiary',
};

export const basic = s(ItemCarrousselItem, {
    title: data.common.title,
    items: [item0],
});

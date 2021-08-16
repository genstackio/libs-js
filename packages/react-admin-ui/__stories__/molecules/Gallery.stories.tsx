import { args, s, a } from '../utils';
import { Gallery } from '../../src';
import data from '../data';

export default {
    title: 'Molecules/Gallery',
    component: Gallery,
    argTypes: a({
        items: args.items,
    }),
};

export const basic = s(Gallery, {
    items: [
        {
            image: data.item.image,
            target: data.item.target,
        },
        {
            image: data.item.image,
            target: data.item.target,
        },
        {
            image: data.item.image,
            target: data.item.target,
        },
        {
            image: data.item.image,
            target: data.item.target,
        },
        {
            image: data.item.image,
            target: data.item.target,
        },
        {
            image: data.item.image,
            target: data.item.target,
        },
        {
            image: data.item.image,
            target: data.item.target,
        },
        {
            image: data.item.image,
            target: data.item.target,
        },
        {
            image: data.item.image,
            target: data.item.target,
        },
        {
            image: data.item.image,
            target: data.item.target,
        },
        {
            image: data.item.image,
            target: data.item.target,
        },
    ],
});

export const withHeader = s(Gallery, {
    items: [
        {
            image: data.item.image,
            target: data.item.target,
        },
        {
            image: data.item.image,
            target: data.item.target,
        },
        {
            image: data.item.image,
            target: data.item.target,
        },
        {
            image: data.item.image,
            target: data.item.target,
        },
        {
            image: data.item.image,
            target: data.item.target,
        },
        {
            image: data.item.image,
            target: data.item.target,
        },
        {
            image: data.item.image,
            target: data.item.target,
        },
        {
            image: data.item.image,
            target: data.item.target,
        },
        {
            image: data.item.image,
            target: data.item.target,
        },
        {
            image: data.item.image,
            target: data.item.target,
        },
        {
            image: data.item.image,
            target: data.item.target,
        },
    ],
    icon: data.common.icon,
    title: data.common.title,
    btnLabel: data.buttons.button1.label,
    btnType: 'contained',
    btnColor: 'primary',
});

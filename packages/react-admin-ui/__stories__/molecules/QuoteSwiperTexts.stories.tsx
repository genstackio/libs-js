import { QuoteSwiperTexts } from '../../src/molecules/QuoteSwiperTexts';
import { args, a, s } from '../utils';
import data from '../data';

export default {
    title: 'Molecules/QuoteSwiperTexts',
    component: QuoteSwiperTexts,
    argTypes: a({
        items: args.items,
    }),
};

const item = {
    image: data.common.image,
    title: data.common.title,
    overline: data.common.overline,
    btnLabel: data.buttons.button1.label,
    btnTarget: data.buttons.button1.target,
};
const item2 = {
    overline: data.common.overline,
    title: data.common.title,
};
const item3 = {
    image: data.common.image,
    overline: data.common.overline,
    title: data.common.title,
    btnLabel: data.buttons.button1.label,
    btnTarget: data.buttons.button1.target,
};

export const basic = s(QuoteSwiperTexts, {
    items: [item, item2, item3],
});

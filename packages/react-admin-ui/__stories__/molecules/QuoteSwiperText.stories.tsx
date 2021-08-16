import { QuoteSwiperText } from '../../src/molecules/QuoteSwiperText';
import { args, a, s } from '../utils';
import data from '../data';

export default {
    title: 'Molecules/QuoteSwiperText',
    component: QuoteSwiperText,
    argTypes: a({
        items: args.items,
    }),
};

export const basic = s(QuoteSwiperText, {
    title: data.common.title,
    overline: data.common.overline,
});

export const withImage = s(QuoteSwiperText, {
    title: data.common.title,
    overline: data.common.overline,
    image: data.common.image,
    btnLabel: data.buttons.button1.label,
    btnTarget: data.buttons.button1.target,
});

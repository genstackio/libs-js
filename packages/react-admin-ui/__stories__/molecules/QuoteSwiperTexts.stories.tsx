import { QuoteSwiperTexts } from '../../src/molecules/QuoteSwiperTexts';
import { a, s } from '../utils';

export default {
    title: 'Molecules/QuoteSwiperTexts',
    component: QuoteSwiperTexts,
    argTypes: a({}),
};

const Template = (args) => <QuoteSwiperTexts {...args} />;

export const basic = s(Template, {});

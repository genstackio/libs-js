import { QuoteSwiperImages } from '../../src/molecules/QuoteSwiperImages';
import { args, a, s } from '../utils';

export default {
    title: 'Molecules/QuoteSwiperImages',
    component: QuoteSwiperImages,
    argTypes: a({
        items: args.items,
    }),
};

const Template = (args) => <QuoteSwiperImages {...args} />;

export const basic = s(Template, {});

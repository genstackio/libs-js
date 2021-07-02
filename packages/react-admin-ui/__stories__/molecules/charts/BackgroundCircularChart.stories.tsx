import { args, s, a } from '../../utils';
import { BackgroundCircularChart } from '../../../src';

export default {
    title: 'Molecules/charts/BackgroundCircularChart',
    component: BackgroundCircularChart,
    argTypes: a({
        color: args.color,
        value: args.value,
    }),
};

const Template = (args) => <BackgroundCircularChart {...args} />;

export const basic = s(Template, {
    value: 35,
    image: {
        url: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
});

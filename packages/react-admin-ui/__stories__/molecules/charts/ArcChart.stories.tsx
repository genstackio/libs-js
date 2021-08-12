import { args, s, a } from '../../utils';
import { ArcChart } from '../../../src';

export default {
    title: 'Molecules/charts/ArcChart',
    component: ArcChart,
    argTypes: a({
        color: args.color,
        value: args.value,
    }),
};

export const basic = s(ArcChart, {
    value: 35,
});

import { s } from '../../utils';
import { UsageChart } from '../../../src';

export default {
    title: 'Molecules/charts/UsageChart',
    component: UsageChart,
};

export const basic = s(UsageChart, {
    value: 25,
    max: 100,
    unit: 'GB',
});

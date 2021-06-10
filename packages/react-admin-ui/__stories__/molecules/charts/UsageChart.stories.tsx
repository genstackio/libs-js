import {s} from "../../utils";
import {UsageChart} from '../../../src';

export default {
    title: 'Molecules/UsageChart',
    component: UsageChart,
}

const Template = args => <UsageChart {...args} />;

export const basic = s(Template,  {
    value: 25,
    max: 100,
    unit: "GB",
})
import {args, s} from "../utils";
import {AreaChart} from "../../src";

export default {
    title: 'Molecules/AreaChart',
    component: AreaChart,
    argTypes: {
        color:args.color,
        series: args.series,
    },
}

const Template = args => <AreaChart {...args} />

export const basic = s(Template, {
    series: [
        [40, 90, 80],
        [100, 70, 120],
        [30, 80, 60],
    ],
});
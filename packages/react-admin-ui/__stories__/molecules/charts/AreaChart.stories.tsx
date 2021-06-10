import {args, s} from "../../utils";
import {AreaChart} from "../../../src";

export default {
    title: 'Molecules/charts/AreaChart',
    component: AreaChart,
    argTypes: {
        title: args.title,
        overline: args.overline,
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

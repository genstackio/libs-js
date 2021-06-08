import {args, s} from "../utils";
import {CircleChart} from "../../src";

export default {
    title: 'Molecules/CircleChart',
    component: CircleChart,
    argTypes: {
        color:args.color,
        series: args.series,
    },
}

const Template = args => <CircleChart {...args} />

export const basic = s(Template, {
    series: [40, 70],
});
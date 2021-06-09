import {args, s} from "../utils";
import {RadialBarChart} from "../../src";

export default {
    title: 'Molecules/RadialBarChart',
    component: RadialBarChart,
    argTypes: {
        color:args.color,
        series: args.series,
        labels:args.labels,
        title:args.title,
    },
}

const Template = args => <RadialBarChart {...args} />

export const basic = s(Template, {
    series: [[ 67, 84, 97, 61]],
    labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
    title : "Total",
});

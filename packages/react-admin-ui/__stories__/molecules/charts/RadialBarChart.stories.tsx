import {args, s, a} from "../../utils";
import {RadialBarChart} from "../../../src";

export default {
    title: 'Molecules/charts/RadialBarChart',
    component: RadialBarChart,
    argTypes: a({
        color:args.color,
        series: args.series,
        labels:args.labels,
        title:args.title,
    }),
}

const Template = args => <RadialBarChart {...args} />

export const basic = s(Template, {
    series: [ 67, 84, 97, 61 ],
    labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
    title : "Total",
});

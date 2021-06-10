import {args, s} from "../../utils";
import {RateChart} from "../../../src";

export default {
    title: 'Molecules/charts/RateChart',
    component: RateChart,
    argTypes: {
        color:args.color,
        value: args.value,
        title: args.title,
        subtitle: args.subtitle,
        overline: args.overline,
    },
}

const Template = args => <RateChart {...args} />

export const basic = s(Template, {
    value: 70,
    title : "Selling Rate",
    subtitle : "As From",
    overline : "24 March 2021",
});
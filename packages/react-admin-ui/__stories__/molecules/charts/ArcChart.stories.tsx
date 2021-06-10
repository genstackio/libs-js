import {args, s} from "../../utils";
import {ArcChart} from "../../../src";

export default {
    title: 'Molecules/charts/ArcChart',
    component: ArcChart,
    argTypes: {
        color:args.color,
        value: args.value,
    },
}

const Template = args => <ArcChart {...args} />

export const basic = s(Template, {
    value: 35,
});
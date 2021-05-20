import {args, s} from "../utils";
import {ScreenHeader} from '../../src';

export default {
    title: 'Organisms/ScreenHeader',
    component: ScreenHeader,
    argTypes: {
        items: args.items,
        color: args.color,
    },
}

const Template = args => <ScreenHeader {...args} />

export const basic = s(Template, {
    items: [
        {
            label: "Home",
            target: "https://www.google.com/",
        },
        {
            label: "Project",
            target: "https://www.google.com/",
        },
        {
            label: "Create Project",
            target: "https://www.google.com/",
        },
    ]
});
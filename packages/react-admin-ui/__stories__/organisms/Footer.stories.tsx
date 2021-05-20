import {args, s} from "../utils";
import {Footer} from '../../src';

export default {
    title: 'Organisms/Footer',
    component: Footer,
    argTypes: {
        content: args.content,
    },
}

const Template = args => <Footer {...args} />

export const basic = s(Template, {
    content: 'Footer Text Example'
});
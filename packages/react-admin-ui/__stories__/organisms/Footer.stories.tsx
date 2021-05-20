import {s} from "../utils";
import {Footer} from '../../src';

export default {
    title: 'Organisms/Footer',
    component: Footer,
    argTypes: {
        content: { control: {type: 'text'} },
    },
}

const Template = args => <Footer {...args} />

export const basic = s(Template, {
    content: 'Footer Text Example'
});
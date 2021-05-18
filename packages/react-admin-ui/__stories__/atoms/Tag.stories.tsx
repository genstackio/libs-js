import {s} from "../utils";
import {Tag} from '../../src';

export default {
    title: 'Atoms/Tag',
    component: Tag,
    argTypes: {
        text: { control: 'text' },
        color: { control: {type: 'select'}, options: ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark', 'none'], defaultValue: 'primary' },
    },

}

const Template = args => (<Tag {...args} />);
export const basic = s(Template, {text: "je suis un tag"})
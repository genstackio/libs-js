import {s} from "../utils";
import {Pill} from '../../src';

export default {
    title: 'Atoms/Pill',
    component: Pill,
    argTypes: {
        text: { control: 'text' },
        color: { control: {type: 'select'}, options: ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark', 'none'] },
    },
}
const Template = args => (<Pill {...args} />);
export const basic = s(Template, {text: "8"})
import {args, s} from "../utils";
import {Badge} from '../../src';

export default {
    title: 'Atoms/Badge',
    component: Badge,
    argTypes: {
        text: {...args.text, defaultValue: 'The Text' },
        variant: { control: {type: 'select'}, options: ['pill', 'tag', 'none'], defaultValue: 'pill' },
        color: { control: {type: 'select'}, options: ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark', 'none'] },
    },
}

const Template = args => (<Badge {...args} />);

export const basic = s(Template, {})
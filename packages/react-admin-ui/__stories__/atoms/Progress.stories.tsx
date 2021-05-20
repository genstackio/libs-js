import {args, s} from "../utils";
import {Progress} from '../../src';

export default {
    title: 'Atoms/Progress',
    component: Progress,
    argTypes: {
        variant: args.progressVariant,
        value: args.value,
    },
}

const Template = args => <Progress {...args} />;

export const basic = s(Template, {
    value: 33,
})
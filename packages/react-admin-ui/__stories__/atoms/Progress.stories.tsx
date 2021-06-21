import {args, s, a} from "../utils";
import {Progress} from '../../src';

export default {
    title: 'Atoms/Progress',
    component: Progress,
    argTypes: a({
        variant: args.progressVariant,
        value: args.value,
    }),
}

const Template = args => <Progress {...args} />;

export const basic = s(Template, {
    value: 33,
})

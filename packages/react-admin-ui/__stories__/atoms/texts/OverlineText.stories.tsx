import { args, s, a } from '../../utils';
import { OverlineText } from '../../../src';

export default {
    title: 'Atoms/texts/OverlineText',
    component: OverlineText,
    argTypes: a({
        text: args.textValue,
    }),
};

const Template = (args) => <OverlineText {...args} />;

export const basic = s(Template, {
    text: 42,
});

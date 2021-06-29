import { args, s, a } from '../../utils';
import { BodyText } from '../../../src';

export default {
    title: 'Atoms/texts/BodyText',
    component: BodyText,
    argTypes: a({
        text: args.textValue,
    }),
};

const Template = (args) => <BodyText {...args} />;

export const basic = s(Template, {
    text: 42,
});

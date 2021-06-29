import { args, s, a } from '../../utils';
import { DescriptionText } from '../../../src';

export default {
    title: 'Atoms/texts/DescriptionText',
    component: DescriptionText,
    argTypes: a({
        text: args.textValue,
    }),
};

const Template = (args) => <DescriptionText {...args} />;

export const basic = s(Template, {
    text: 42,
});

import { args, s, a } from '../../utils';
import { TitleText } from '../../../src';

export default {
    title: 'Atoms/texts/TitleText',
    component: TitleText,
    argTypes: a({
        text: args.textValue,
    }),
};

const Template = (args) => <TitleText {...args} />;

export const basic = s(Template, {
    text: 42,
});

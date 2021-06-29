import { args, s, a } from '../../utils';
import { SubtitleText } from '../../../src';

export default {
    title: 'Atoms/texts/SubtitleText',
    component: SubtitleText,
    argTypes: a({
        text: args.textValue,
    }),
};

const Template = (args) => <SubtitleText {...args} />;

export const basic = s(Template, {
    text: 42,
});

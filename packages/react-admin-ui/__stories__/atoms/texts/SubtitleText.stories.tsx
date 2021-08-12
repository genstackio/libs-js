import { args, s, a } from '../../utils';
import { SubtitleText } from '../../../src';

export default {
    title: 'Atoms/texts/SubtitleText',
    component: SubtitleText,
    argTypes: a({
        text: args.textValue,
    }),
};

export const basic = s(SubtitleText, {
    text: 42,
});

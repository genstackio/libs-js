import { args, s, a } from '../../utils';
import { TitleText } from '../../../src';

export default {
    title: 'Atoms/texts/TitleText',
    component: TitleText,
    argTypes: a({
        text: args.textValue,
    }),
};

export const basic = s(TitleText, {
    text: 42,
});

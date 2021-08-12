import { args, s, a } from '../../utils';
import { DescriptionText } from '../../../src';

export default {
    title: 'Atoms/texts/DescriptionText',
    component: DescriptionText,
    argTypes: a({
        text: args.textValue,
    }),
};

export const basic = s(DescriptionText, {
    text: 42,
});

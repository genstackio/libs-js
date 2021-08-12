import { args, s, a } from '../../utils';
import { OverlineText } from '../../../src';

export default {
    title: 'Atoms/texts/OverlineText',
    component: OverlineText,
    argTypes: a({
        text: args.textValue,
    }),
};

export const basic = s(OverlineText, {
    text: 42,
});

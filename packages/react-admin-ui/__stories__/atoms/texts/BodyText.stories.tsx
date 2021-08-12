import { args, s, a } from '../../utils';
import { BodyText } from '../../../src';

export default {
    title: 'Atoms/texts/BodyText',
    component: BodyText,
    argTypes: a({
        text: args.textValue,
    }),
};

export const basic = s(BodyText, {
    text: 42,
});

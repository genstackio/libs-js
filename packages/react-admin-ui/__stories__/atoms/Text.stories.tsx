import { args, s, a } from '../utils';
import { Text } from '../../src';

export default {
    title: 'Atoms/Text',
    component: Text,
    argTypes: a({
        color: args.color,
        variant: args.textVariant,
        text: args.text,
    }),
};

const Template = (args) => <Text {...args} />;

export const basic = s(Template, {
    text: 'texte',
    color: 'inherit',
    variant: 'body',
});

import { args, s, a } from '../utils';
import { ChoiceButton } from '../../src';
import data from '../data';

export default {
    title: 'Molecules/ChoiceButton',
    component: ChoiceButton,
    argTypes: a({
        items: args.items,
        color: args.color,
        variant: args.blockVariant,
    }),
};

export const basic = s(ChoiceButton, {
    children: data.buttons.button1.label,
    items: [
        {
            label: 'link one',
            target: 'https://www.google.fr',
            active: true,
        },
        {
            label: 'Calendar',
            target: 'https://www.amazon.fr',
            active: true,
        },
        {
            label: 'Another link',
            target: 'https://fr.reactjs.org',
            active: true,
        },
    ],
});

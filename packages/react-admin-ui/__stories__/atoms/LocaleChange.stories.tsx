import { args, s, a } from '../utils';
import { LocaleChange } from '../../src';

export default {
    title: 'Atoms/LocaleChange',
    component: LocaleChange,
    argTypes: a({
        locales: args.locales,
        color: args.color,
    }),
};

const Template = (args) => <LocaleChange {...args} />;

export const basic = s(Template, {
    locales: [
        {
            value: 'fr-FR',
            language: 'Français',
        },
        {
            value: 'en-GB',
            language: 'English',
        },
        {
            value: 'it-IT',
            language: 'Italiano',
        },
    ],
});

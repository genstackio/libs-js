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

export const basic = s(LocaleChange, {
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

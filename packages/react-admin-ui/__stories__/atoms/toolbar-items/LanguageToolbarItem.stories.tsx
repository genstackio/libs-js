import { s, a, args } from '../../utils';
import { LanguageToolbarItem } from '../../../src';

export default {
    title: 'Atoms/toolbar-items/LanguageToolbarItem',
    component: LanguageToolbarItem,
    argTypes: a({
        className: args._disabled,
    }),
};

const Template = (args) => <LanguageToolbarItem {...args} />;

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

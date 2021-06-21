import {args, s} from "../utils";
import {LocaleChange} from '../../src';

export default {
    title: 'Atoms/LocaleChange',
    component: LocaleChange,
    argTypes: {
      locales: args.locales
    },
}

const Template = args => <LocaleChange {...args} />;

export const basic = s(Template, {
  locales: [
  {
    value: 'fr-FR',
    language: 'Français'
  },
  {
    value: 'en-GB',
    language: 'English'
  },
  {
    value: 'it-IT',
    language: 'Italiano',
  }
]
});

import { args, a, s } from '../utils';
import { AppPush } from '../../src';

export default {
    title: 'Organisms/AppPush',
    component: AppPush,
    argTypes: a({
        title: args.title,
        description: args.description,
        btnLabelAppStore: { control: 'text' },
        btnLabelGooglePlay: { control: 'text' },
    }),
};

const Template = (args) => <AppPush {...args} />;

export const basic = s(Template, {
    title: 'Téléchargez notre application',
    description: "Disponible sur l'App Store ou sous Android",
    btnLabelAppStore: 'AppStore',
    btnLabelGooglePlay: 'GooglePlay',
});

import { args, a, s } from '../utils';
import { AppPush } from '../../src';
import data from '../data';

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
    title: data.common.title,
    description: data.common.description,
    btnLabelAppStore: 'AppStore',
    btnLabelGooglePlay: 'GooglePlay',
});

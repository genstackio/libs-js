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

export const basic = s(AppPush, {
    title: data.common.title,
    description: data.common.description,
    btnLabelAppStore: 'AppStore',
    btnLabelGooglePlay: 'GooglePlay',
});

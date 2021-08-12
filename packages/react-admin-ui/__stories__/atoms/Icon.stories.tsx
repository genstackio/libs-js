import { args, s, a } from '../utils';
import { Icon } from '../../src';

export default {
    title: 'Atoms/Icon',
    component: Image,
    argTypes: a({
        url: args.text,
        alt: args.text,
    }),
};

export const basic = s(Icon, {
    icon: 'phone',
});

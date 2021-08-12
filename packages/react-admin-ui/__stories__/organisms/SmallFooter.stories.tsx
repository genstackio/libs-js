import { args, a, s } from '../utils';
import { SmallFooter } from '../../src';

export default {
    title: 'Organisms/SmallFooter',
    component: SmallFooter,
    argTypes: a({
        logo: args.logo,
    }),
};

export const basic = s(SmallFooter, {
    logo: {
        url: 'https://via.placeholder.com/687x426?text=Image',
        alt: 'Some Placeholder',
    },
});

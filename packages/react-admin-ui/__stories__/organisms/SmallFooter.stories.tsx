import { args, a, s } from '../utils';
import { SmallFooter } from '../../src';

export default {
    title: 'Organisms/SmallFooter',
    component: SmallFooter,
    argTypes: a({
        logo: args.logo,
    }),
};

const Template = (args) => <SmallFooter {...args} />;

export const basic = s(Template, {
    logo: {
        url: 'https://via.placeholder.com/687x426?text=Image',
        alt: 'Some Placeholder',
    },
});

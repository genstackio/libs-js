import { s, a, args } from '../../utils';
import { CenteredLayoutTemplate } from '../../../src';

export default {
    title: 'Templates/Layout/CenteredLayoutTemplate',
    component: CenteredLayoutTemplate,
    argTypes: a({
        image: args.image,
        logo: args.logo,
        children: args.children,
    }),
};

const Template = (args) => <CenteredLayoutTemplate {...args} />;

export const basic = s(Template, {
    logo: {
        url: 'https://via.placeholder.com/120x40?text=Logo',
        alt: 'Logo',
    },
});

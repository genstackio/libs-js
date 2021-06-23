import { args, s, a } from '../utils';
import { CentralTemplate } from '../../src';

export default {
    title: 'Templates/CentralTemplate',
    component: CentralTemplate,
    argTypes: a({
        color: args.color,
        image: args.image,
        message: args.message,
    }),
};

const Template = (args) => <CentralTemplate {...args} />;

export const basic = s(Template, {
    image: {
        url: 'https://picsum.photos/200/300',
        alt: '',
    },
    message: 'WE ARE COMING SOON',
});

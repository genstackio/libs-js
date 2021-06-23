import { args, s, a } from '../utils';
import { LoginTemplate } from '../../src';

export default {
    title: 'Templates/LoginTemplate',
    component: LoginTemplate,
    argTypes: a({
        image: args.image,
        logo: args.logo,
        form: args.form,
    }),
};

const Template = (args) => <LoginTemplate {...args} />;

export const basic = s(Template, {
    image: {
        url: 'https://picsum.photos/3840/2160',
        alt: 'Background',
    },
    logo: {
        url: 'https://via.placeholder.com/120x40?text=Logo',
        alt: 'Logo',
    },
    form: <div>Login Form</div>,
});

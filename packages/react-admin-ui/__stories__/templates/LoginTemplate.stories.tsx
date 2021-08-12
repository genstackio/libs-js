import { args, s, a } from '../utils';
import { LoginTemplate, LoginForm } from '../../src';

export default {
    title: 'Templates/LoginTemplate',
    component: LoginTemplate,
    argTypes: a({
        image: args.image,
        logo: args.logo,
        form: args.form,
    }),
};

export const basic = s(LoginTemplate, {
    image: {
        url: 'https://picsum.photos/3840/2160',
        alt: 'Background',
    },
    logo: {
        url: 'https://via.placeholder.com/120x40?text=Logo',
        alt: 'Logo',
    },
    form: <LoginForm />,
});

import {args, s, a} from "../utils";
import {Login2Template} from '../../src';

export default {
    title: 'Templates/Login2Template',
    component: Login2Template,
    argTypes: a({
        image: args.image,
        bgColor: args.bgColor,
        logo: args.logo,
        form: args.form,
    }),
}

const Template = args => <Login2Template {...args} />

export const basic = s(Template, {
    image: {
        url: 'https://picsum.photos/3840/2160',
        alt: 'Background',
    },
    logo: {
        url: 'https://via.placeholder.com/120x40?text=Logo',
        alt: 'Logo',
    },
    bgColor: '#F8F9FE',
    form: (<div>Login Form</div>)
});

import {args, s} from "../utils";
import {Gallery} from '../../src';

export default {
    title: 'Molecules/Gallery',
    component: Gallery,
    argTypes: {
        items: args.items,
    },

}

const Template = args => <Gallery {...args} />;

export const basic = s(Template, {
    items: [
        {
            url: 'https://image-placeholder.com/images/actual-size/200x200.png',
            alt: 'alt',
        },
        {
            url: 'https://image-placeholder.com/images/actual-size/200x200.png',
            alt: 'alt',
        },
        {
            url: 'https://image-placeholder.com/images/actual-size/200x200.png',
            alt: 'alt',
        },
        {
            url: 'https://image-placeholder.com/images/actual-size/200x200.png',
            alt: 'alt',
        },
        {
            url: 'https://image-placeholder.com/images/actual-size/200x200.png',
            alt: 'alt',
        },
        {
            url: 'https://image-placeholder.com/images/actual-size/200x200.png',
            alt: 'alt',
        },
        {
            url: 'https://image-placeholder.com/images/actual-size/200x200.png',
            alt: 'alt',
        },
        {
            url: 'https://image-placeholder.com/images/actual-size/200x200.png',
            alt: 'alt',
        },
        {
            url: 'https://image-placeholder.com/images/actual-size/200x200.png',
            alt: 'alt',
        },
        {
            url: 'https://image-placeholder.com/images/actual-size/200x200.png',
            alt: 'alt',
        },
        {
            url: 'https://image-placeholder.com/images/actual-size/200x200.png',
            alt: 'alt',
        },
        {
            url: 'https://image-placeholder.com/images/actual-size/200x200.png',
            alt: 'alt',
        }
    ],
})
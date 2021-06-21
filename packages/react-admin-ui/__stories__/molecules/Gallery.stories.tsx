import {args, s, a} from "../utils";
import {Gallery} from '../../src';

export default {
    title: 'Molecules/Gallery',
    component: Gallery,
    argTypes: a({
        items: args.items,
    }),

}

const Template = args => <Gallery {...args} />;

export const basic = s(Template, {
    items: [
        {
            url: 'https://picsum.photos/200/200',
            alt: 'alt',
        },
        {
            url: 'https://picsum.photos/200/200',
            alt: 'alt',
        },
        {
            url: 'https://picsum.photos/200/200',
            alt: 'alt',
        },
        {
            url: 'https://picsum.photos/200/200',
            alt: 'alt',
        },
        {
            url: 'https://picsum.photos/200/200',
            alt: 'alt',
        },
        {
            url: 'https://picsum.photos/200/200',
            alt: 'alt',
        },
        {
            url: 'https://picsum.photos/200/200',
            alt: 'alt',
        },
        {
            url: 'https://picsum.photos/200/200',
            alt: 'alt',
        },
        {
            url: 'https://picsum.photos/200/200',
            alt: 'alt',
        },
        {
            url: 'https://picsum.photos/200/200',
            alt: 'alt',
        },
        {
            url: 'https://picsum.photos/200/200',
            alt: 'alt',
        },
    ]
})

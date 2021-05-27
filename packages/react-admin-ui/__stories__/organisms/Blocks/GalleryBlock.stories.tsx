import {args, s} from "../../utils";
import {GalleryBlock} from '../../../src';

export default {
    title: 'Organisms/Blocks/GalleryBlock',
    component: GalleryBlock,
    argTypes: {
        text: args.title,
        items: args.items,
    },
}

const Template = args => <GalleryBlock {...args} />;

export const basic = s(Template,  {
    text: "IMAGE GALLERY",
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
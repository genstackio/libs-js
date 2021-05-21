import {args, s} from "../utils";
import {Thumbnail} from '../../src';

export default {
    title: 'Atoms/Thumbnail',
    component: Thumbnail,
    argTypes: {
        image: args.image,
        size: args.size,
        shape: args.shape,
    },
}

const Template = args => <Thumbnail {...args} />;

export const basic = s(Template, {
    image: {
        url: 'https://image-placeholder.com/images/actual-size/1600x1200.png',
        alt: 'img'
    }
})

const image = {
    url: 'https://image-placeholder.com/images/actual-size/1600x1200.png',
    alt: 'img'
}

const image2 = {
    url: 'https://image-placeholder.com/images/actual-size/1600x1200.png',
    alt: 'img'
}

export const showcase = s(args => (
    <div className={'space-y-2'}>
        <div className={'flex items-center space-x-4'}>
            <Template {...args} image={image} size={'xl'} />
            <Template {...args} image={image2} size={'xl'} />
        </div>
    </div>
    ), {
        alt: 'img',
    }
)
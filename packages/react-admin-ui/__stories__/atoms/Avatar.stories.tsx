import { args, s, a } from '../utils';
import { Avatar } from '../../src';

export default {
    title: 'Atoms/Avatar',
    component: Avatar,
    argTypes: a({
        name: args.name,
        image: args.image,
        size: args.size,
        shape: args.shape,
        status: args.status,
    }),
};

const Template = (args) => <Avatar {...args} />;

export const basic = s(Template, {
    name: 'John Doe',
    image: {
        url: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        alt: 'profile picture',
    },
});

const image = {
    url: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    alt: 'profile picture',
};

export const showcase = s(
    (args) => (
        <div className={'space-y-2'}>
            <div className={'flex items-center space-x-4'}>
                <Template {...args} image={image} size={'xs'} />
                <Template {...args} image={image} size={'sm'} status={'online'} />
                <Template {...args} image={image} size={'md'} status={'offline'} />
                <Template {...args} image={image} size={'lg'} status={'busy'} />
                <Template {...args} image={image} size={'xl'} />
            </div>
            <div className={'flex items-center space-x-4'}>
                <Template {...args} image={image} size={'xs'} shape={'rounded'} />
                <Template {...args} image={image} size={'sm'} status={'online'} shape={'rounded'} />
                <Template {...args} image={image} size={'md'} status={'offline'} shape={'rounded'} />
                <Template {...args} image={image} size={'lg'} status={'busy'} shape={'rounded'} />
                <Template {...args} image={image} size={'xl'} shape={'rounded'} />
            </div>
            <div className={'flex items-center space-x-4'}>
                <Template {...args} size={'xs'} />
                <Template {...args} size={'sm'} status={'online'} />
                <Template {...args} size={'md'} status={'offline'} />
                <Template {...args} size={'lg'} status={'busy'} />
                <Template {...args} size={'xl'} />
            </div>
        </div>
    ),
    {
        name: 'John Doe',
    },
);

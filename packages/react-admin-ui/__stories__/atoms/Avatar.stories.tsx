import { args, s, a } from '../utils';
import { Avatar } from '../../src';
import data from '../data';

export default {
    title: 'Atoms/Avatar',
    component: Avatar,
    argTypes: a({
        name: args.name,
        image: args.image,
        size: args.avatarSize,
        shape: args.shape,
        status: args.status,
        title: args.title,
        subtitle: args.subtitle,
    }),
};

export const basic = s(Avatar, {
    name: data.user.name,
    image: data.user.image,
});

export const withTitle = s(Avatar, {
    title: data.user.name,
    subtitle: data.user.email,
    image: data.user.image,
});

export const showcase = s(
    (args) => (
        <div className={'space-y-2'}>
            <div className={'flex items-center space-x-4'}>
                <Avatar {...args} image={data.user.image} size={'xs'} />
                <Avatar {...args} image={data.user.image} size={'sm'} status={'online'} />
                <Avatar {...args} image={data.user.image} size={'md'} status={'offline'} />
                <Avatar {...args} image={data.user.image} size={'lg'} status={'busy'} />
                <Avatar {...args} image={data.user.image} size={'xl'} />
            </div>
            <div className={'flex items-center space-x-4'}>
                <Avatar {...args} image={data.user.image} size={'sm'} status={'online'} shape={'rounded'} />
                <Avatar {...args} image={data.user.image} size={'md'} status={'offline'} shape={'rounded'} />
                <Avatar {...args} image={data.user.image} size={'lg'} status={'busy'} shape={'rounded'} />
                <Avatar {...args} image={data.user.image} size={'xl'} shape={'rounded'} />
                <Avatar {...args} image={data.user.image} size={'xs'} shape={'rounded'} />
            </div>
            <div className={'flex items-center space-x-4'}>
                <Avatar {...args} size={'xs'} />
                <Avatar {...args} size={'sm'} status={'online'} />
                <Avatar {...args} size={'md'} status={'offline'} />
                <Avatar {...args} size={'lg'} status={'busy'} />
                <Avatar {...args} size={'xl'} />
            </div>
        </div>
    ),
    {
        name: data.user.name,
    },
);

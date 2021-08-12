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

const Template = (args) => <Avatar {...args} />;

export const basic = s(Template, {
    name: data.user.name,
    image: data.user.image,
});

export const withTitle = s(Template, {
    title: data.user.name,
    subtitle: data.user.email,
    image: data.user.image,
});

export const showcase = s(
    (args) => (
        <div className={'space-y-2'}>
            <div className={'flex items-center space-x-4'}>
                <Template {...args} image={data.user.image} size={'xs'} />
                <Template {...args} image={data.user.image} size={'sm'} status={'online'} />
                <Template {...args} image={data.user.image} size={'md'} status={'offline'} />
                <Template {...args} image={data.user.image} size={'lg'} status={'busy'} />
                <Template {...args} image={data.user.image} size={'xl'} />
            </div>
            <div className={'flex items-center space-x-4'}>
                <Template {...args} image={data.user.image} size={'sm'} status={'online'} shape={'rounded'} />
                <Template {...args} image={data.user.image} size={'md'} status={'offline'} shape={'rounded'} />
                <Template {...args} image={data.user.image} size={'lg'} status={'busy'} shape={'rounded'} />
                <Template {...args} image={data.user.image} size={'xl'} shape={'rounded'} />
                <Template {...args} image={data.user.image} size={'xs'} shape={'rounded'} />
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
        name: data.user.name,
    },
);

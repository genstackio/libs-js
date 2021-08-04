import { args, a, s } from '../utils';
import { VideoPlayer } from '../../src';

export default {
    title: 'Molecules/VideoPlayer',
    component: VideoPlayer,
    argTypes: a({
        url: { control: 'text' },
        image: { control: 'object' },
        btnLabel: args.btnLabel,
    }),
};

const Template = (args) => <VideoPlayer {...args} />;

export const basic = s(Template, {
    url: 'https://www.youtube.com/embed/Z3xkHmC-KQE',
    image: { url: 'https://via.placeholder.com/419x219?text=Image', alt: 'an image' },
});

export const customIcon = s(Template, {
    url: 'https://www.youtube.com/embed/Z3xkHmC-KQE',
    image: { url: 'https://via.placeholder.com/419x219?text=Image', alt: 'an image' },
    icon: 'exit_to_app',
});

export const withButtonLabel = s(Template, {
    url: 'https://www.youtube.com/embed/Z3xkHmC-KQE',
    image: { url: 'https://via.placeholder.com/419x219?text=Image', alt: 'an image' },
    btnLabel: 'Click Here',
});

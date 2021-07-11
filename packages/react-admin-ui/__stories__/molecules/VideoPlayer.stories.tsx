import { s } from '../utils';
import { VideoPlayer } from '../../src';

export default {
    title: 'Molecules/VideoPlayer',
    component: VideoPlayer,
    argTypes: {
        url: { control: 'text' },
        image: { control: 'object' },
    },
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

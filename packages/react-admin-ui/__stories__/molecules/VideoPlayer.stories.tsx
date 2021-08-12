import { args, a, s } from '../utils';
import { VideoPlayer } from '../../src';
import data from '../data';

export default {
    title: 'Molecules/VideoPlayer',
    component: VideoPlayer,
    argTypes: a({
        url: { control: 'text' },
        image: { control: 'object' },
        btnLabel: args.btnLabel,
    }),
};

export const basic = s(VideoPlayer, {
    url: data.common.video,
    image: data.common.image,
});

export const customIcon = s(VideoPlayer, {
    url: data.common.video,
    image: data.common.image,
    icon: data.common.icon,
});

export const withButtonLabel = s(VideoPlayer, {
    url: data.common.video,
    image: data.common.image,
    btnLabel: data.buttons.button1.label,
});

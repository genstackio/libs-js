import { args, s, a } from '../utils';
import { ShareIcons } from '../../src';

export default {
    title: 'Molecules/ShareIcons',
    component: ShareIcons,
    argTypes: a({
        items: args.items,
        color: args.color,
    }),
};

const Template = (args) => <ShareIcons {...args} />;

export const basic = s(Template, {
    items: [
        { type: 'facebook', target: 'https://www.facebook.com' },
        { type: 'googleplus' },
        { type: 'twitter' },
        { type: 'instagram' },
        { type: 'rss' },
        { type: 'something' },
    ],
});

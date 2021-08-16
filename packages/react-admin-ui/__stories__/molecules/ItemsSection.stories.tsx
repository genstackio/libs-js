import { args, s, a } from '../utils';
import { ItemsSection } from '../../src';
import { images, data } from '../data';

export default {
    title: 'Molecules/ItemsSection',
    component: ItemsSection,
    argTypes: a({
        items: args.items,
        title: args.title,
        description: args.description,
    }),
};

const item = {
    image: data.user.image,
    title: data.user.name,
    subtitle: data.user.title,
};

export const basic = s(ItemsSection, {
    items: [{ ...item, color: 'primary' }, item, item, item, item, item],
    title: data.common.title,
    description: data.common.content,
});

export const SmallLayout = s(ItemsSection, {
    items: [item, item, item, item, item, item, item, item, item, item, item, item, item, item, item, item, item, item],
    title: data.common.title,
    description: data.common.content,
    layout: 'small',
});

export const LargeLayout = s(ItemsSection, {
    items: [
        { ...item, share_icons: [{ type: 'twitter' }, { type: 'google' }] },
        { ...item, share_icons: [{ type: 'twitter' }, { type: 'google' }] },
        { ...item, share_icons: [{ type: 'twitter' }, { type: 'google' }] },
    ],
    layout: 'large',
    title: data.common.title,
    description: data.common.content,
    color: 'primary',
})

export const framedLayout = s(ItemsSection, {
    items: [
        { ...item, share_icons: [{ type: 'twitter' }, { type: 'google' }] },
        { ...item, share_icons: [{ type: 'twitter' }, { type: 'google' }] },
        { ...item, share_icons: [{ type: 'twitter' }, { type: 'google' }] },
    ],
    layout: 'framed',
    title: data.common.title,
    description: data.common.content,
    color: 'primary',
    variant: 'filled',
});

import { args, a, s } from '../../utils';
import { NewsBlock } from '../../../src';

export default {
    title: 'Organisms/Blocks/NewsBlock',
    component: NewsBlock,
    argTypes: a({
        title: args.title,
        items: args.items,
        btnLabel: args.btnLabel,
        dropdownItems: args.dropdownItems,
        color: args.color,
        variant: args.blockVariant,
    }),
};

export const basic = s(NewsBlock, {
    title: 'News & Update',
    items: [
        {
            title: '36% off For pixel lights Couslations Types.',
            content: 'Lorem Ipsum is simply dummy...',
        },
        {
            title: 'We are produce new product this',
            content: 'Lorem Ipsum is simply text of the printing...',
        },
        {
            title: '50% off For COVID Couslations Types.',
            content: 'Lorem Ipsum is simply dummy...',
        },
    ],
    btnLabel: 'More...',
    dropdownItems: [{ name: 'Today' }, { name: 'Tomorrow' }, { name: 'Yesterday' }],
});

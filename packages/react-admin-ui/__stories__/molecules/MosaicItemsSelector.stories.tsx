import { args, a, s } from '../utils';
import { MosaicItemsSelector } from '../../src';

export default {
    title: 'Molecules/MosaicItemsSelector',
    component: MosaicItemsSelector,
    argTypes: a({
        title: args.title,
        items: args.items,
        selected: args.selected,
    }),
};

const Template = (args) => <MosaicItemsSelector {...args} />;

export const basic = s(Template, {
    title: 'title',
    items: [
        { id: 0 },
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 },
        { id: 9 },
        { id: 10 },
        { id: 11 },
    ],
});

export const withSelected = s(Template, {
    title: 'title',
    items: [
        { id: 0 },
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 },
        { id: 9 },
        { id: 10 },
        { id: 11 },
    ],
    selected: { id: 2 },
});

import { args, a, s } from '../utils';
import { MosaicItems } from '../../src';

export default {
    title: 'Molecules/MosaicItems',
    component: MosaicItems,
    argTypes: a({
        items: args.items,
    }),
};

const Template = (args) => <MosaicItems {...args} />;

export const basic = s(Template, {
    items: [{ id: 0 }, { id: 1 }, { id: 2 }],
});

export const manyItems = s(Template, {
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

export const withSelectionAlert = s(Template, {
    items: [{ id: 0 }, { id: 1 }, { id: 2 }],
    onSelectionChange: (item) => {
        alert(`Selected item : ${item.id}`);
    },
});

export const withSelected = s(Template, {
    items: [{ id: 0 }, { id: 1 }, { id: 2 }],
    selected: { id: 2 },
});

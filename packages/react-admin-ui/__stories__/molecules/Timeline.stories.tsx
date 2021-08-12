import { args, s, a } from '../utils';
import { Timeline } from '../../src';

export default {
    title: 'Molecules/Timeline',
    component: Timeline,
    argTypes: a({
        items: args.items,
    }),
};

export const basic = s(Timeline, {
    items: [
        {
            title: 'Update Product',
            description: 'Quisque a consequat ante Sit amet magna at volutapt.',
            color: 'secondary',
        },
        {
            title: 'James liked Nike Shoes',
            description: 'Aenean sit amet magna vel magna fringilla ferme.',
            color: 'primary',
        },
        {
            title: 'john just buy your product',
            description: 'Vestibulum nec mi suscipit, dapibus purus.....',
            color: 'secondary',
        },
        {
            title: 'Jihan Doe just save your product',
            description: 'Curabitur egestas consequat lorem.',
            color: 'primary',
        },
    ],
});

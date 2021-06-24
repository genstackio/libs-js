import {s, a, args} from '../../utils';
import {BasicCard} from '../../../src';

export default {
    title: 'Molecules/cards/BasicCard',
    component: BasicCard,
    argTypes: a({
        color: args.color,
        description: args.title,
        image: args.image,
        title: args.title,
        onClick: args.onClick,
    }),
};

const Template = (args) => <BasicCard {...args} />;

export const basic = s(Template, {
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: {
        url: 'https://picsum.photos/550/400',
            alt: 'alt',
    },
    title: 'Johan Deo',
    onClick: () => alert('clicked!'),
});

import {args, s} from "../../utils";
import {HeadingBlock} from '../../../src';

export default {
    title: 'Organisms/Blocks/HeadingBlock',
    component: HeadingBlock,
    argTypes: {
        color: args.color,
        variant: args.blockVariant,
        padding: args.padding,
        iconCornerTopLeft: args.iconCorner,
        iconCornerTopRight: args.iconCorner,
        iconCornerBottomLeft: args.iconCorner,
        iconCornerBottomRight: args.iconCorner,
    },
}

const Template = args => <HeadingBlock {...args} />;

export const basic = s(Template, {
    title: 'Good Afternoon',
    text: 'Today\'s earning is $4005 & your sales increase rate is 3.7 over the last 24 hours',
    btnLabel: 'Whats New',
    image: {
        url: `https://images.unsplash.com/photo-1578836537282-3171d77f8632?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80`},
});

export const custom = s(Template, {
    title: "Good Afternoon",
    iconTitle: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21.856 10.303c.086.554.144 1.118.144 1.697 0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11c2.347 0 4.518.741 6.304 1.993l-1.422 1.457c-1.408-.913-3.082-1.45-4.882-1.45-4.962 0-9 4.038-9 9s4.038 9 9 9c4.894 0 8.879-3.928 8.99-8.795l1.866-1.902zm-.952-8.136l-9.404 9.639-3.843-3.614-3.095 3.098 6.938 6.71 12.5-12.737-3.096-3.096z"/></svg>),
    text: "Today's earning is $4005 & your sales increase rate is 3.7 over the last 24 hours",
    btnLabel: 'Whats New',
    image: {
        url: `https://images.unsplash.com/photo-1578836537282-3171d77f8632?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80`},

});
import {args, s} from "../../utils";
import {VisualBulletBlock} from '../../../src';

export default {
    title: 'Organisms/Blocks/VisualBulletBlock',
    component: VisualBulletBlock,
    argTypes: {
        items: args.items,
        icon_color: args.color,
        text_color:args.color,
        variant: args.blockVariant,
    },
}

const Template = args => <VisualBulletBlock {...args} />;

export const basic = s(Template, {
    items: [
        {
            icon: "local_shipping",
            title: "Free Shipping",
            subTitle: "Free Shipping World Wide",
        },
        {
            icon: "timer",
            title: "24 X 7 Service",
            subTitle: "Online Service For New Customer",
        },
        {
            icon: "redeem",
            title: "Festival Offer",
            subTitle: "New Online Special Festival",
        },
        {
            icon: "credit_card",
            title: "Online Payment",
            subTitle: "Contrary To Popular Belief",
        },
    ]
})

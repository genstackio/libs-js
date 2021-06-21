import {args, s, a} from "../../utils";
import {VisualBulletBlock} from '../../../src';

export default {
    title: 'Organisms/Blocks/VisualBulletBlock',
    component: VisualBulletBlock,
    argTypes: a({
        items: args.items,
        icon_color: args.color,
        text_color:args.color,
        variant: args.blockVariant,
    }),
}

const Template = args => <VisualBulletBlock {...args} />;

export const basic = s(Template, {
    items: [
        {
            icon: "local_shipping",
            title: "Free Shipping",
            subtitle: "Free Shipping World Wide",
        },
        {
            icon: "timer",
            title: "24 X 7 Service",
            subtitle: "Online Service For New Customer",
        },
        {
            icon: "redeem",
            title: "Festival Offer",
            subtitle: "New Online Special Festival",
        },
        {
            icon: "credit_card",
            title: "Online Payment",
            subtitle: "Contrary To Popular Belief",
        },
    ]
})

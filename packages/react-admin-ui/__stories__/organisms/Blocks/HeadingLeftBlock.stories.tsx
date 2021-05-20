import {args, s} from "../../utils";
import {HeadingLeftBlock} from '../../../src';

export default {
    title: 'Organisms/Blocks/HeadingLeftBlock',
    component: HeadingLeftBlock,
    argTypes: {
        title: args.title,
        subtitle: args.subtitle,
        description: args.description,
        btnLabel: args.btnLabel,
        color: args.color,
        variant: args.blockVariant,
        padding: args.padding,
    },
}

const Template = args => <HeadingLeftBlock {...args} />;

export const basic = s(Template, {
    title: 'Alert',
    subtitle: '10% off For drama lights Couslations...',
    description: 'Lorem Ipsum is simply dummy...It is a long established fact that a reader will be distracted by',
    btnLabel: '...',
});
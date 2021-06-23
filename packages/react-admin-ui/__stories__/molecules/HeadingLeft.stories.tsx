import { args, s, a } from '../utils';
import { HeadingLeft } from '../../src';

export default {
    title: 'Molecules/HeadingLeft',
    component: HeadingLeft,
    argTypes: a({
        title: args.title,
        subtitle: args.subtitle,
        description: args.description,
        btnLabel: args.btnLabel,
        color: args.color,
        variant: args.blockVariant,
        padding: args.padding,
    }),
};

const Template = (args) => <HeadingLeft {...args} />;

export const basic = s(Template, {
    title: 'Alert',
    subtitle: '10% off For drama lights Couslations...',
    description: 'Lorem Ipsum is simply dummy...It is a long established fact that a reader will be distracted by',
    btnLabel: '...',
});

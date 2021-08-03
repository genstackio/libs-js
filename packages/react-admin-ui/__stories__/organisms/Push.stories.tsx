import { args, a, s } from '../utils';
import { Push } from '../../src';

export default {
    title: 'Organisms/Push',
    component: Push,
    argTypes: a({
        title: args.title,
        subtitle: args.subtitle,
        text: args.text,
        btnLabel: args.btnLabel,
        btnTarget: args.target,
        image: args.image,
        color: args.color,
        fgColor: { control: 'text' },
        imageLeft: { control: 'boolean' },
    }),
};

const Template = (args) => <Push {...args} />;

export const basic = s(Template, {
    title: 'Title goes here',
    subtitle: 'Subtitle goes here',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo faucibus eros, vitae accumsan neque blandit molestie. Cras turpis urna, blandit consequat dui in, tincidunt dictum lectus.',
    btnLabel: 'Button Label',
    image: { url: 'https://via.placeholder.com/687x426?text=Image' },
});

export const withBgImage = s(Template, {
    title: 'Title goes here',
    subtitle: 'Subtitle goes here',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo faucibus eros, vitae accumsan neque blandit molestie. Cras turpis urna, blandit consequat dui in, tincidunt dictum lectus.',
    btnLabel: 'Button Label',
    image: { url: 'https://via.placeholder.com/687x426?text=Image' },
});

export const imageLeft = s(Template, {
    title: 'Title goes here',
    subtitle: 'Subtitle goes here',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo faucibus eros, vitae accumsan neque blandit molestie. Cras turpis urna, blandit consequat dui in, tincidunt dictum lectus.',
    btnLabel: 'Button Label',
    image: { url: 'https://via.placeholder.com/687x426?text=Image' },
    imageLeft: true,
});

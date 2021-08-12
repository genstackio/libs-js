import { args, s, a } from '../utils';
import { Container } from '../../src';
import data from '../data';

export default {
    title: 'Atoms/Container',
    component: Container,
    argTypes: a({
        text: args.text,
        color: args.color,
        variant: args.blockVariant,
        fullscreen: args.flag,
    }),
};

const Template = (args) => <Container {...args} />;

export const basic = s(Template, {
    children: data.common.content,
    bgImage: data.common.image,
});

export const fullscreen = s(
    (args) => (
        <div style={{ width: '100wh', height: '100vh' }}>
            <Template {...args} />
        </div>
    ),
    {
        fullscreen: true,
        children: data.common.content,
        bgImage: data.common.image,
    },
);

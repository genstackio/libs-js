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

export const basic = s(Container, {
    children: data.common.content,
    bgImage: data.common.image,
});

export const fullscreen = s(
    (args) => (
        <div style={{ width: '100wh', height: '100vh' }}>
            <Container {...args} />
        </div>
    ),
    {
        fullscreen: true,
        children: data.common.content,
        bgImage: data.common.image,
    },
);

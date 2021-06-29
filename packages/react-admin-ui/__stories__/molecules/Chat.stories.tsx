import { s, a } from '../utils';
import { Chat } from '../../src';

export default {
    title: 'Molecules/Chat',
    component: Chat,
    argTypes: a({}),
};

const Template = (args) => <Chat {...args} />;

export const basic = s(Template, {});

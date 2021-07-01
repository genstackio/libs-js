import { s, a, args } from '../utils';
import { MessageToolbarItem } from '../../src';

export default {
    title: 'Atoms/MessageToolbarItem',
    component: MessageToolbarItem,
    argTypes: a({}),
};

const Template = (args) => <MessageToolbarItem {...args} />;

export const basic = s(Template, {});

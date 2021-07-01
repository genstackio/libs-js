import { s, a } from '../../utils';
import { MessageToolbarItem } from '../../../src';

export default {
    title: 'Atoms/toolbar-items/MessageToolbarItem',
    component: MessageToolbarItem,
    argTypes: a({}),
};

const Template = (args) => <MessageToolbarItem {...args} />;

export const basic = s(Template, {});

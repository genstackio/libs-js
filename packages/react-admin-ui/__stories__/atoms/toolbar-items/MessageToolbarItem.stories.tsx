import { s, a } from '../../utils';
import { MessageToolbarItem } from '../../../src';

export default {
    title: 'Atoms/toolbar-items/MessageToolbarItem',
    component: MessageToolbarItem,
    argTypes: a({}),
};

export const basic = s(MessageToolbarItem, {});

import { s, a } from '../utils';
import { Chat } from '../../src';

export default {
    title: 'Molecules/Chat',
    component: Chat,
    argTypes: a({}),
};

export const basic = s(Chat, {});

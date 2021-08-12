import { s, a } from '../../utils';
import { NotificationToolbarItem } from '../../../src';

export default {
    title: 'Atoms/toolbar-items/NotificationToolbarItem',
    component: NotificationToolbarItem,
    argTypes: a({}),
};

export const basic = s(NotificationToolbarItem, {});

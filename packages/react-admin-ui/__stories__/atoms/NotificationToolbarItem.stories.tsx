import { s, a, args } from '../utils';
import { NotificationToolbarItem } from '../../src';

export default {
    title: 'Atoms/NotificationToolbarItem',
    component: NotificationToolbarItem,
    argTypes: a({}),
};

const Template = (args) => <NotificationToolbarItem {...args} />;

export const basic = s(Template, {});

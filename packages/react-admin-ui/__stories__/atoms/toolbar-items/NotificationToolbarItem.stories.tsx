import { s, a } from '../../utils';
import { NotificationToolbarItem } from '../../../src';

export default {
    title: 'Atoms/toolbar-items/NotificationToolbarItem',
    component: NotificationToolbarItem,
    argTypes: a({}),
};

const Template = (args) => <NotificationToolbarItem {...args} />;

export const basic = s(Template, {});

import { s } from '../utils';
import { BuddyStatus } from '../../src';

export default {
    title: 'Nucleons/BuddyStatus',
    component: BuddyStatus,
    argTypes: {},
};

const Template = (args) => <BuddyStatus {...args} />;

export const basic = s(Template, {
    status: 'unknown',
});

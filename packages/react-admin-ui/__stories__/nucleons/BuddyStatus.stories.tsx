import { s } from '../utils';
import { BuddyStatus } from '../../src';

export default {
    title: 'Nucleons/BuddyStatus',
    component: BuddyStatus,
    argTypes: {},
};

export const basic = s(BuddyStatus, {
    status: 'unknown',
});

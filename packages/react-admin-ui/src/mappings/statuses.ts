import clsxmp from '../utils/clsxmp';

export const statuses = {
    online: 'bg-green-400',
    offline: 'bg-gray-300',
    busy: 'bg-red-500',
    unknown: '',
};

export type status = 'online' | 'offline' | 'busy' | 'unknown';

export const defaultStatus = 'unknown';

export const statusClass = (v: status | undefined, e: any = {}) => clsxmp(v, defaultStatus, statuses, e);

export default statusClass;

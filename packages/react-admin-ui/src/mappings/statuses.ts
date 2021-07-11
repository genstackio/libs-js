import clsxmp from '../utils/clsxmp';

export const statuses = {
    online: 'bg-success',
    offline: 'bg-disabled',
    busy: 'bg-danger',
    unknown: 'bg-warning',
};

export type status = 'online' | 'offline' | 'busy' | 'unknown';

export const defaultStatus = 'unknown';

export const statusClass = (v: status | undefined, e: any = {}) => clsxmp(v, defaultStatus, statuses, e);

export default statusClass;

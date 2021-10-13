import preset from "../preset";

export type status = 'online' | 'offline' | 'busy' | 'unknown';

export const statusClass = preset.xclasses<status>('status');

export default statusClass;

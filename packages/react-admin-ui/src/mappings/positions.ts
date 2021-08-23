import clsxmp from '../utils/clsxmp';
import { position } from '../types';

export const positions = {
    left: 'flex flex-row-reverse',
    right: 'flex flex-row',
    bottom: 'flex flex-col',
    top: 'flex flex-col-reverse',
};

export const positionValues = Object.keys(positions);

export const defaultPosition = 'default';

export const positionClass = (v: position | undefined, e: any = {}) => clsxmp(v, defaultPosition, positions, e);

export default positionClass;

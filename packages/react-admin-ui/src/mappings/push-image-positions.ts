import clsxmp from '../utils/clsxmp';
import { push_image_position } from '../types';

export const pushImagePositions = {
    left: 'flex flex-row-reverse',
    right: 'flex flex-row',
    bottom: 'flex flex-col',
    top: 'flex flex-col-reverse',
};

export const pushImagePositionValues = Object.keys(pushImagePositions);

export const defaultPushImagePosition = 'default';

export const pushImagePositionClass = (v: push_image_position | undefined, e: any = {}) =>
    clsxmp(v, defaultPushImagePosition, pushImagePositions, e);

export default pushImagePositionClass;

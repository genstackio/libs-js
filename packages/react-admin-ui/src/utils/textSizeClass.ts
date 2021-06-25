import clsxm from './clsxm';
import { clsxm_params } from '../types';
import {textSizes} from '../mappings/text-sizes';

export const styles = {
    common: textSizes,
};

export const textSizeClass = (params: clsxm_params) => clsxm(params, styles, ['size']);

export default textSizeClass;

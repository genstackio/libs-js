import { clsxm_params } from '../types';
import clsx from 'clsx';
import textSizeClass from './textSizeClass';
import textColorClass from './textColorClass';

export const textClass = (params: clsxm_params) => clsx(textColorClass(params), textSizeClass(params));

export default textClass;

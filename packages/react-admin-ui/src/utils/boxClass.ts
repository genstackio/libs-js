import clsx from 'clsx';
import borderClass from './borderClass';
import bgClass from './bgClass';
import textClass from './textClass';
import { clsxm_params } from '../types';

export const boxClass = (params: clsxm_params) => clsx(bgClass(params), borderClass(params), textClass(params));

export default boxClass;

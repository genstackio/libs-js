import clsx from 'clsx';
import borderClass from './borderClass';
import bgClass from './bgClass';
import textClass from './textClass';
import { clsxm_params } from '../types';

export const buttonClass = (params: clsxm_params) => {
    params = { hoverable: true, disablable: true, ...params };
    return clsx(bgClass(params), borderClass(params), textClass(params));
};

export default buttonClass;

import clsxm from './clsxm';
import { clsxm_params } from '../types';

export const styles = {
    common: {
        'filled-primary': 'text-primary',
        'filled-secondary': 'text-secondary',
        'filled-success': 'text-success',
        'filled-info': 'text-info',
        'filled-warning': 'text-warning',
        'filled-danger': 'text-danger',
        'filled-light': 'text-light',
        'filled-dark': 'text-dark',
        'filled-none': 'text-dark',
        'outlined-primary': 'text-primary',
        'outlined-secondary': 'text-secondary',
        'outlined-success': 'text-success',
        'outlined-info': 'text-info',
        'outlined-warning': 'text-warning',
        'outlined-danger': 'text-danger',
        'outlined-light': 'text-black',
        'outlined-dark': 'text-dark',
        'outlined-none': 'text-dark',
        'contained-primary': 'text-white',
        'contained-secondary': 'text-white',
        'contained-success': 'text-white',
        'contained-info': 'text-white',
        'contained-warning': 'text-white',
        'contained-danger': 'text-white',
        'contained-light': 'text-dark',
        'contained-dark': 'text-white',
        'contained-none': 'text-dark',
        'light-primary': 'text-black',
        'light-secondary': 'text-black',
        'light-success': 'text-black',
        'light-info': 'text-black',
        'light-warning': 'text-black',
        'light-danger': 'text-black',
        'light-light': 'text-black',
        'light-dark': 'text-black',
        'light-none': 'text-black',
    },
    nonDisabled: {
        'filled-primary': '',
        'filled-secondary': '',
        'filled-success': '',
        'filled-info': '',
        'filled-warning': '',
        'filled-danger': '',
        'filled-light': '',
        'filled-dark': '',
        'filled-none': 'text-dark',
        'outlined-primary': '',
        'outlined-secondary': '',
        'outlined-success': '',
        'outlined-info': '',
        'outlined-warning': '',
        'outlined-danger': '',
        'outlined-light': '',
        'outlined-dark': '',
        'outlined-none': 'text-dark',
        'contained-primary': '',
        'contained-secondary': '',
        'contained-success': '',
        'contained-info': '',
        'contained-warning': '',
        'contained-danger': '',
        'contained-light': '',
        'contained-dark': '',
        'contained-none': 'text-dark',
    },
    hoverable: {
        'filled-primary': '',
        'filled-secondary': '',
        'filled-success': '',
        'filled-info': '',
        'filled-warning': '',
        'filled-danger': '',
        'filled-light': '',
        'filled-dark': '',
        'filled-none': '',
        'outlined-primary': 'hover:text-white',
        'outlined-secondary': 'hover:text-white',
        'outlined-success': 'hover:text-white',
        'outlined-info': 'hover:text-white',
        'outlined-warning': 'hover:text-white',
        'outlined-danger': 'hover:text-white',
        'outlined-light': 'hover:text-dark',
        'outlined-dark': 'hover:text-white',
        'outlined-none': '',
        'contained-primary': '',
        'contained-secondary': '',
        'contained-success': '',
        'contained-info': '',
        'contained-warning': '',
        'contained-danger': '',
        'contained-light': '',
        'contained-dark': '',
        'contained-none': '',
        'light-primary': 'hover:text-primary',
        'light-secondary': 'hover:text-secondary',
        'light-success': 'hover:text-success',
        'light-info': 'hover:text-info',
        'light-warning': 'hover:text-warning',
        'light-danger': 'hover:text-danger',
        'light-light': 'hover:text-light',
        'light-dark': 'hover:text-dark',
        'light-none': 'hover:text-none',
    },
};

export const textColorClass = (params: clsxm_params) => clsxm(params, styles);

export default textColorClass;
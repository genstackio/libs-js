import clsx from "clsx";

export type variant = string;
export type color = string;

const buildStyleKey = ({color = 'primary', variant = 'filled'}) => {
    return variant.concat('-', color)
}

export const commonStyles = {
    'filled-primary': 'text-primary',
    'filled-secondary': 'text-secondary',
    'filled-success': 'text-success',
    'filled-info': 'text-info',
    'filled-warning': 'text-warning',
    'filled-danger': 'text-danger',
    'filled-light': 'text-black',
    'filled-dark': 'text-dark',
    'outlined-primary': 'bg-transparent text-primary border border-primary',
    'outlined-secondary': 'bg-transparent text-secondary border border-secondary',
    'outlined-success': 'bg-transparent text-success border border-success',
    'outlined-info': 'bg-transparent text-info border border-info',
    'outlined-warning': 'bg-transparent text-warning border border-warning',
    'outlined-danger': 'bg-transparent text-danger border border-danger',
    'outlined-light': 'bg-transparent text-black border border-light',
    'outlined-dark': 'bg-transparent text-dark border border-dark',
    'contained-primary': 'bg-primary text-white',
    'contained-secondary': 'bg-secondary text-white',
    'contained-success': 'bg-success text-white',
    'contained-info': 'bg-info text-white',
    'contained-warning': 'bg-warning text-white',
    'contained-danger': 'bg-danger text-white',
    'contained-light': 'bg-light text-dark',
    'contained-dark': 'bg-dark text-white',
}

export const nonDisabledStyles = {
    'filled-primary': 'hover:bg-primary hover:bg-opacity-20 focus:outline-none',
    'filled-secondary': 'hover:bg-secondary hover:bg-opacity-20 focus:outline-none',
    'filled-success': 'hover:bg-success hover:bg-opacity-20 focus:outline-none',
    'filled-info': 'hover:bg-info hover:bg-opacity-20 focus:outline-none',
    'filled-warning': 'hover:bg-warning hover:bg-opacity-20 focus:outline-none',
    'filled-danger': 'hover:bg-danger hover:bg-opacity-20 focus:outline-none',
    'filled-light': 'hover:bg-light focus:outline-none',
    'filled-dark': 'hover:bg-dark hover:bg-opacity-20 focus:outline-none',
    'outlined-primary': 'hover:bg-primary hover:text-white hover:border-transparent focus:outline-none',
    'outlined-secondary': 'hover:bg-secondary hover:text-white hover:border-transparent focus:outline-none',
    'outlined-success': 'hover:bg-success hover:text-white hover:border-transparent focus:outline-none',
    'outlined-info': 'hover:bg-info hover:text-white hover:border-transparent focus:outline-none',
    'outlined-warning': 'hover:bg-warning hover:text-white hover:border-transparent focus:outline-none',
    'outlined-danger': 'hover:bg-danger hover:text-white hover:border-transparent focus:outline-none',
    'outlined-light': 'hover:bg-light hover:text-dark hover:border-transparent focus:outline-none',
    'outlined-dark': 'hover:bg-dark hover:text-white hover:border-transparent focus:outline-none',
    'contained-primary': 'hover:bg-opacity-70 focus:outline-none',
    'contained-secondary': 'hover:bg-opacity-70 focus:outline-none',
    'contained-success': 'hover:bg-opacity-70 focus:outline-none',
    'contained-info': 'hover:bg-opacity-70 focus:outline-none',
    'contained-warning': 'hover:bg-opacity-70 focus:outline-none',
    'contained-danger': 'hover:bg-opacity-70 focus:outline-none',
    'contained-light': 'hover:bg-opacity-50 focus:outline-none',
    'contained-dark': 'hover:bg-opacity-70 focus:outline-none',
}

export function colorClass({disabled = false, ...attributes}: {variant?: variant, color?: color, disabled?: boolean}) {
    const key = buildStyleKey(attributes);
    return clsx(commonStyles[key], !disabled && nonDisabledStyles[key]);
}

export default colorClass
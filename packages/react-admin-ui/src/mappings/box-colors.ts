import clsxmp from '../utils/clsxmp';

export const boxColors = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    success: 'bg-success',
    info: 'bg-info',
    warning: 'bg-warning',
    danger: 'bg-danger',
    disabled: 'bg-disabled',
    light: 'bg-light',
    dark: 'bg-dark',
    none: 'bg-white',
    clear: 'bg-clear',
    default: '',
};

export type box_color =
    | 'primary'
    | 'secondary'
    | 'success'
    | 'info'
    | 'warning'
    | 'danger'
    | 'disabled'
    | 'light'
    | 'dark'
    | 'none'
    | 'clear'
    | 'default';

export const defaultBoxColor = 'default';

export const boxColorClass = (v: box_color | undefined, e: any = {}) => clsxmp(v, defaultBoxColor, boxColors, e);

export default boxColorClass;

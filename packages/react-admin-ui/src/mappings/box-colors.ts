import clsxmp from "../utils/clsxmp";

export const boxColors = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    success: 'bg-success',
    info: 'bg-info',
    warning: 'bg-warning',
    danger: 'bg-danger',
    light: 'bg-light',
    dark: 'bg-dark',
    none: 'bg-white',
    default: '',
};

export type box_color =
      'primary'
    | 'secondary'
    | 'success'
    | 'info'
    | 'warning'
    | 'danger'
    | 'light'
    | 'dark'
    | 'none'
    | 'default'
;

export const defaultBoxColor = 'default';

export const boxColorClass = (v: box_color|undefined, e: any = {}) => clsxmp(v, defaultBoxColor, boxColors, e);

export default boxColorClass
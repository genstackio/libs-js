import clsxmp from '../utils/clsxmp';
import clsx from 'clsx';

export const spinners = {
    // xs
    'xs-dots': 'h-1 w-1 bg-danger rounded-full',
    'xs-dotted-circle': 'h-3 w-3 border-4 border-primary border-dotted',
    'xs-full-circle': 'h-3 w-3 border border-t-4 border-warning',
    'xs-half-circle': 'h-3 w-3 border-t-2 border-r-2 border-secondary',
    'xs-separate-circle': 'h-3 w-3 border-t-2 border-b-2 border-dark',
    'xs-squares': 'h-1 w-1 bg-info',
    'xs-circle': 'h-3 w-3 border-1 border-secondary x-border-l-transparent',
    // sm
    'sm-dots': 'h-2 w-2 bg-danger rounded-full',
    'sm-dotted-circle': 'h-4 w-4 border-4 border-primary border-dotted',
    'sm-full-circle': 'h-4 w-4 border border-t-4 border-warning',
    'sm-half-circle': 'h-4 w-4 border-t-2 border-r-2 border-secondary',
    'sm-separate-circle': 'h-4 w-4 border-t-2 border-b-2 border-dark',
    'sm-squares': 'h-2 w-1 bg-info',
    'sm-circle': 'h-4 w-4 border-2 border-secondary x-border-l-transparent',
    // md
    'md-dots': 'h-3 w-3 bg-danger rounded-full',
    'md-dotted-circle': 'h-6 w-6 border-4 border-primary border-dotted',
    'md-full-circle': 'h-6 w-6 border border-t-4 border-warning',
    'md-half-circle': 'h-6 w-6 border-t-2 border-r-2 border-secondary',
    'md-separate-circle': 'h-6 w-6 border-t-2 border-b-2 border-dark',
    'md-squares': 'h-3 w-1 bg-info',
    'md-circle': 'h-6 w-6 border-2 border-secondary x-border-l-transparent',
    // lg
    'lg-dots': 'h-4 w-4 bg-danger rounded-full',
    'lg-dotted-circle': 'h-10 w-10 border-4 border-primary border-dotted',
    'lg-full-circle': 'h-10 w-10 border border-t-4 border-warning',
    'lg-half-circle': 'h-10 w-10 border-t-2 border-r-2 border-secondary',
    'lg-separate-circle': 'h-10 w-10 border-t-2 border-b-2 border-dark',
    'lg-squares': 'h-4 w-1 bg-info',
    'lg-circle': 'h-10 w-10 border-3 border-secondary x-border-l-transparent',
    // xl
    'xl-dots': 'h-5 w-5 bg-danger rounded-full',
    'xl-dotted-circle': 'h-20 w-20 border-4 border-primary border-dotted',
    'xl-full-circle': 'h-20 w-20 border border-t-4 border-warning',
    'xl-half-circle': 'h-20 w-20 border-t-2 border-r-2 border-secondary',
    'xl-separate-circle': 'h-20 w-20 border-t-2 border-b-2 border-dark',
    'xl-squares': 'h-5 w-1 bg-info',
    'xl-circle': 'h-20 w-20 border-4 border-secondary x-border-l-transparent',
};

export const colorSpinners = {
    // primary
    'primary-dots': 'bg-primary',
    'primary-dotted-circle': 'border-primary',
    'primary-full-circle': 'border-primary',
    'primary-half-circle': 'border-primary',
    'primary-separate-circle': 'border-primary',
    'primary-squares': 'bg-primary',
    'primary-circle': 'border-primary x-border-l-transparent',
    // secondary
    'secondary-dots': 'bg-secondary',
    'secondary-dotted-circle': 'border-secondary',
    'secondary-full-circle': 'border-secondary',
    'secondary-half-circle': 'border-secondary',
    'secondary-separate-circle': 'border-secondary',
    'secondary-squares': 'bg-secondary',
    'secondary-circle': 'border-secondary x-border-l-transparent',
    // success
    'success-dots': 'bg-success',
    'success-dotted-circle': 'border-success',
    'success-full-circle': 'border-success',
    'success-half-circle': 'border-success',
    'success-separate-circle': 'border-success',
    'success-squares': 'bg-success',
    'success-circle': 'border-success x-border-l-transparent',
    // info
    'info-dots': 'bg-info',
    'info-dotted-circle': 'border-info',
    'info-full-circle': 'border-info',
    'info-half-circle': 'border-info',
    'info-separate-circle': 'border-info',
    'info-squares': 'bg-info',
    'info-circle': 'border-info x-border-l-transparent',
    // warning
    'warning-dots': 'bg-warning',
    'warning-dotted-circle': 'border-warning',
    'warning-full-circle': 'border-warning',
    'warning-half-circle': 'border-warning',
    'warning-separate-circle': 'border-warning',
    'warning-squares': 'bg-warning',
    'warning-circle': 'border-warning x-border-l-transparent',
    // danger
    'danger-dots': 'bg-danger',
    'danger-dotted-circle': 'border-danger',
    'danger-full-circle': 'border-danger',
    'danger-half-circle': 'border-danger',
    'danger-separate-circle': 'border-danger',
    'danger-squares': 'bg-danger',
    'danger-circle': 'border-danger x-border-l-transparent',
    // light
    'light-dots': 'bg-light',
    'light-dotted-circle': 'border-light',
    'light-full-circle': 'border-light',
    'light-half-circle': 'border-light',
    'light-separate-circle': 'border-light',
    'light-squares': 'bg-light',
    'light-circle': 'border-light x-border-l-transparent',
    // dark
    'dark-dots': 'bg-dark',
    'dark-dotted-circle': 'border-dark',
    'dark-full-circle': 'border-dark',
    'dark-half-circle': 'border-dark',
    'dark-separate-circle': 'border-dark',
    'dark-squares': 'bg-dark',
    'dark-circle': 'border-dark x-border-l-transparent',
};

export const spinnerVariants = {
    dots: true,
    'dotted-circle': true,
    'full-circle': true,
    'half-circle': true,
    'separate-circle': true,
    squares: true,
    circle: true,
};

export const spinnerColors = {
    primary: true,
    secondary: true,
    success: true,
    info: true,
    warning: true,
    danger: true,
    light: true,
    dark: true,
};

export const spinnerSizes = {
    xs: true,
    sm: true,
    md: true,
    lg: true,
    xl: true,
};

export type spinner_variant =
    | 'dots'
    | 'dotted-circle'
    | 'full-circle'
    | 'half-circle'
    | 'separate-circle'
    | 'squares'
    | 'circle';

export type spinner_size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type spinner_color = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';

export const defaultSpinnerVariant = 'squares';

export const defaultSpinnerSize = 'md';

export const spinnerClass = (
    { variant, size, color }: { variant?: spinner_variant; size?: spinner_size; color?: spinner_color },
    e: any = {},
) =>
    clsx(
        clsxmp(`${size}-${variant}`, `${defaultSpinnerSize}-${defaultSpinnerVariant}`, spinners, e),
        clsxmp(`${color}-${variant}`, `primary-${variant}`, colorSpinners, e),
    );

export default spinnerClass;

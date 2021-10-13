import clsx from 'clsx';
import preset from "../preset";

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

export const spinnerClass = (
    { variant, size, color }: { variant?: spinner_variant; size?: spinner_size; color?: spinner_color },
    e: any = {},
) =>
    clsx(
        preset.classes('spinner', `${size}-${variant}`, e, `${preset.get('spinnerSize').default}-${preset.get('spinnerVariant').default}`),
        preset.classes('colorSpinner', `${color}-${variant}`, e, `primary-${variant}`),
    );

export default spinnerClass;

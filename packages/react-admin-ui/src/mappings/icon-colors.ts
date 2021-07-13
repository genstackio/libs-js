export const iconColors: { [key: string]: icon_color } = {
    primary: 'primary',
    secondary: 'secondary',
    danger: 'error',
    default: undefined,
    inherit: 'inherit',
};

export const iconColorValues = Object.values(iconColors);

export const mapIconColor = (c) => iconColors[c || defaultIconColor] || iconColors[defaultIconColor];

export type icon_color = undefined | 'primary' | 'secondary' | 'inherit' | 'action' | 'error';

export const defaultIconColor = 'default';

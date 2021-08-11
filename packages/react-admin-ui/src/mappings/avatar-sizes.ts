import clsxmp from '../utils/clsxmp';

export const avatarSizes = {
    xs: 'w-8 h-8 text-xs',
    xsm: 'w-10 h-10 text-base',
    sm: 'w-12 h-12 text-base',
    md: 'w-16 h-16 text-3xl',
    lg: 'w-20 h-20 text-4xl',
    xl: 'w-24 h-24 text-5xl',
};

export const avatarSizeValues = Object.keys(avatarSizes);

export type avatar_size = 'xs' | 'xsm' | 'sm' | 'md' | 'lg' | 'xl';

export const defaultAvatarSize = 'md';

export const avatarSizeClass = (v: avatar_size | undefined, e: any = {}) =>
    clsxmp(v, defaultAvatarSize, avatarSizes, e);

export default avatarSizeClass;

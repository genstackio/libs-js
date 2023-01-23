import preset from '../preset';

export type avatar_size = 'xs' | 'xsm' | 'sm' | 'md' | 'lg' | 'xl';

export const avatarSizeClass = preset.xclasses<avatar_size>('avatarSize');

export default avatarSizeClass;

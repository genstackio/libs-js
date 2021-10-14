import preset from "../preset";

export type divider_size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'default';

export const dividerSizeClass = preset.xclasses<divider_size>('dividerSize');

export default dividerSizeClass;

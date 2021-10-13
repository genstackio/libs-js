import preset from "../preset";

export type image_size = 'none' | 'lg' | 'lg-w' | 'lg-h' | 'xl' | 'xl-w' | 'xl-h';

export const imageSizeClass = preset.xclasses<image_size>('imageSize');

export default imageSizeClass;

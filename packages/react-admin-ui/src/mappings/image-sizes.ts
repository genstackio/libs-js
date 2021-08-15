import clsxmp from '../utils/clsxmp';

export const imageSizes = {
    none: '',
    lg: 'w-24 h-24',
    'lg-w': 'w-24',
    'lg-h': 'h-24',
    xl: 'w-40 h-40',
    'xl-w': 'w-40',
    'xl-h': 'h-40',
};

export const imageSizeValues = Object.keys(imageSizes);

export type image_size = 'none' | 'lg' | 'lg-w' | 'lg-h' | 'xl' | 'xl-w' | 'xl-h';

export const defaultImageSize = 'none';

export const imageSizeClass = (v: image_size | undefined, e: any = {}) => clsxmp(v, defaultImageSize, imageSizes, e);

export default imageSizeClass;

import clsxmp from '../utils/clsxmp';

export const thumbnailSizes = {
    xl: 'w-24 h-30 text-5xl',
};

export const thumbnailSizeValues = Object.keys(thumbnailSizes);

export type thumbnail_size = 'xl';

export const defaultThumbnailSize = 'xl';

export const thumbnailSizeClass = (v: thumbnail_size | undefined, e: any = {}) =>
    clsxmp(v, defaultThumbnailSize, thumbnailSizes, e);

export default thumbnailSizeClass;

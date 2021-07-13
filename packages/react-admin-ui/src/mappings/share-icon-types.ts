import clsxmp from '../utils/clsxmp';

export const shareIconTypes = {
    default: 'fa-far--moon',
    // free brands
    facebook: 'fa-fab--facebook-f',
    googleplus: 'fa-fab--google-plus-g',
    twitter: 'fa-fab--twitter',
    instagram: 'fa-fab--instagram',
    // solid svg
    rss: 'fa-fas--rss',
};

export const shareIconTypeValues = Object.keys(shareIconTypes);

export type share_icon_type = 'default' | 'facebook' | 'googleplus' | 'twitter' | 'instagram' | 'rss';

export const defaultShareIconType = 'default';

export const shareIconTypeClass = (v: share_icon_type | undefined, e: any = {}) =>
    clsxmp(v, defaultShareIconType, shareIconTypes, e);

export default shareIconTypeClass;

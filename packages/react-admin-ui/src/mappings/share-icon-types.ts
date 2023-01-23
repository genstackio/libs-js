import preset from '../preset';

export type share_icon_type = 'default' | 'facebook' | 'googleplus' | 'twitter' | 'instagram' | 'rss';

export const shareIconTypeClass = preset.xclasses<share_icon_type>('shareIconType');

export default shareIconTypeClass;

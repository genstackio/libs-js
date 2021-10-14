import preset from "../preset";

export type icon_color = undefined | 'primary' | 'secondary' | 'inherit' | 'action' | 'error';

export const mapIconColor = preset.xclasses('iconColor');

export default mapIconColor;

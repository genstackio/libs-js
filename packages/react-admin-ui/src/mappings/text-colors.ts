import { box_color } from './box-colors';
import preset from "../preset";

export type text_color = box_color | 'inherit';

export const textColorClass = preset.xclasses<text_color>('textColor');

export default textColorClass;

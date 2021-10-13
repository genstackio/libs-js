import boxTextSizeClass from './box-text-sizes';
import boxTextColorClass from './box-text-colors';
import preset from "../preset";

export const boxTextClass = preset.combine(boxTextColorClass, boxTextSizeClass);

export default boxTextClass;

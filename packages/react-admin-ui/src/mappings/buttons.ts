import boxBorderClass from './box-borders';
import bgClass from './bgs';
import boxTextClass from './box-texts';
import preset from "../preset";

export const buttonClass = preset.customCombine(
    params => ({ hoverable: true, disablable: true, ...params }),
    bgClass,
    boxBorderClass,
    boxTextClass
);

export default buttonClass;

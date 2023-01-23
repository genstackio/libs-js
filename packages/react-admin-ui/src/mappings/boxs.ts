import bgClass from '../mappings/bgs';
import boxBorderClass from '../mappings/box-borders';
import boxTextClass from '../mappings/box-texts';
import preset from '../preset';

export const boxClass = preset.combine(bgClass, boxBorderClass, boxTextClass);

export default boxClass;

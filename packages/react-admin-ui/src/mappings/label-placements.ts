import preset from "../preset";

export type label_placement = 'none' | 'left' | 'top' | 'bottom' | 'right';

export const labelPlacementClass = preset.xclasses<label_placement>('labelPlacement');

export default labelPlacementClass;

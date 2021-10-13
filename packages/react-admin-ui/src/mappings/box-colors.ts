import preset from "../preset";

export type box_color =
    | 'primary'
    | 'secondary'
    | 'success'
    | 'info'
    | 'warning'
    | 'danger'
    | 'disabled'
    | 'light'
    | 'dark'
    | 'none'
    | 'clear'
    | 'default'
;

export const boxColorClass = preset.xclasses<box_color>('boxColor');

export default boxColorClass;

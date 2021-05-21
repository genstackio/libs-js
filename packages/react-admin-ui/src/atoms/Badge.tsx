import Pill from './Pill';
import {box_color, badge_variant, box_variant} from "../types";
import Tag from './Tag';

export function Badge({type, ...props}: BadgeProps) {
    if (!props.text) return null;
    switch (type) {
        case 'pill': return <Pill  {...props}  />;
        case 'none': return null;
        default:
        case 'tag': return <Tag {...props} />;
    }
}

export interface BadgeProps {
    variant?: box_variant,
    color?: box_color,
    text?: string,
    type?: badge_variant,
}

export default Badge

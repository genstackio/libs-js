import Pill from './Pill';
import {badge_variant, box_color} from "../types";
import Tag, {TagProps} from './Tag';

export function Badge({variant, ...props}: BadgeProps) {
    switch (variant) {
        case 'pill': return <Pill  {...props}  />;
        case 'none': return null;
        default:
        case 'tag': return <Tag {...props} />;
    }
}

export interface BadgeProps extends TagProps {
    variant?: badge_variant,
    color?: box_color,
    text?: string,
}

export default Badge

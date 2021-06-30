import Pill from './Pill';
import { box_color, badge_variant, box_variant, rich_text, class_name } from '../types';
import Tag from './Tag';

const types = {
    pill: Pill,
    none: undefined,
    tag: Tag,
    default: Tag,
};

export function Badge({ type, ...props }: BadgeProps) {
    if (!props.text) return null;
    const Component = types[type || 'default'] || types.default;
    return Component ? <Component {...props} /> : null;
}

export interface BadgeProps {
    className?: class_name;
    color?: box_color;
    text?: rich_text;
    type?: badge_variant;
    variant?: box_variant;
}

export default Badge;

import Pill from './Pill';
import { badge_variant } from '../types';
import Tag from './Tag';
import { WithBox, WithClassName, WithText } from '../withs';

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

export interface BadgeProps extends WithClassName, WithBox, WithText {
    type?: badge_variant;
}

export default Badge;

import Pill from './Pill';
import { badge_variant } from '../types';
import Tag from './Tag';
import { WithText } from '../withs';
import { AsBox } from '../as';

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

export interface BadgeProps extends AsBox, WithText {
    type?: badge_variant;
}

// noinspection JSUnusedGlobalSymbols
export default Badge;

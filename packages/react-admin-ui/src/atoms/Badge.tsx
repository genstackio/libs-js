import Tag from './Tag';
import Pill from './Pill';
import { AsBox } from '../as';
import { WithText, WithTypeOfBadge } from '../withs';

const types = {
    pill: Pill,
    none: undefined,
    tag: Tag,
    default: Tag,
};

export function Badge({ type, ...props }: BadgeProps) {
    const Component = types[type || 'default'] || types.default;

    if (!props.text || !Component) return null;

    return <Component {...props} />;
}

export interface BadgeProps extends AsBox, WithText, WithTypeOfBadge {}

// noinspection JSUnusedGlobalSymbols
export default Badge;

import React from 'react';
import Pill from './Pill';
import Tag, {TagProps} from './Tag';

export function Badge({variant = 'tag', ...props}: BadgeProps) {
    switch (variant) {
        case 'pill': return <Pill {...props} />;
        default:
        case 'tag': return <Tag {...props} />;
    }
}

export interface BadgeProps extends TagProps {
    variant?: 'tag' | 'pill',
}

export default Badge
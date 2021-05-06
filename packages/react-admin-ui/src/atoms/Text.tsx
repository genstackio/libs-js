import React from 'react';

export function Text({variant}: TextProps) {
    return (
        <div>TEXT {variant}</div>
    );
}

export interface TextProps {
    variant?: 'text' | 'title1' | 'title2' | 'title3' | 'title4' | 'title5' | 'title6' | 'body' | 'overline' | 'description' | 'subtitle'
}

export default Text
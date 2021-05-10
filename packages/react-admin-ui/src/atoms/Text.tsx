import React from 'react';
import clsx from 'clsx';

const colors = {
    heading1: 'text-indigo-600',
    heading2: 'text-pink-600',
    heading3: 'text-green-600',
    heading4: 'text-purple-700',
    heading5: 'text-yellow-400',
    heading6: 'text-red-600',
}

const variants = {
    text: 'text-base',
    title1: 'text-6xl font-bold',
    title2: 'text-5xl font-bold',
    title3: 'text-4xl font-bold',
    title4: 'text-3xl font-bold',
    title5: 'text-2xl font-bold',
    title6: 'text-xl font-bold',
    body: 'text-base',
    overline: 'text-base underline',
    description: 'text-base',
    subtitle:'text-base',
}

export function Text({color = 'heading1', text, variant='text'}: TextProps) {
    return (
        <div className={clsx(colors[color] || colors['heading1'], variants[variant] || variants['text'], 'inline-flex font-bold pr-2 py-1 ')}>{text}</div>
    );
}

export interface TextProps {
    variant?: 'text' | 'title1' | 'title2' | 'title3' | 'title4' | 'title5' | 'title6' | 'body' | 'overline' | 'description' | 'subtitle',
    color?: 'heading1' | 'heading2' | 'heading3' | 'heading4' | 'heading5' | 'heading6',
    text?: string,
}

export default Text

import clsx from 'clsx';
import React from 'react';

const colors = {
    default :'bg-purple-400',
    secondary :'bg-red-400',
    success : 'bg-green-600',
    info : 'bg-purple-700',
    warning : 'bg-yellow-400',
    danger : 'bg-red-600',
    light : 'bg-gray-200',
    dark : 'bg-gray-900',
}

export function Tag({color = 'default', text}: TagProps) {
    return (
        <div className={clsx(colors[color] || colors['default'], 'text-xs inline-flex font-bold uppercase pr-4 pl-4 py-1 rounded-lg text-white')}>
            {text}
        </div>
    );
}

export interface TagProps {
    text?: string,
    color?: 'default' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark'
}

export default Tag

import clsx from 'clsx';
import React from 'react';

const colors = {
    default : 'bg-purple-400',
    secondary : 'bg-red-400',
    success : 'bg-green-600',
    info : 'bg-purple-700',
    warning : 'bg-yellow-400',
    danger : 'bg-red-600',
    light : 'bg-gray-200',
    dark : 'bg-gray-900',
}

export function Pill({color = 'default', text}: PillProps) {
    return (
        <div className={clsx(colors[color] || colors['default'], 'text-xs inline-flex font-bold uppercase pl-2 pr-2 py-1 rounded-full text-white')}>
            {text}
        </div>
    );
}

export interface PillProps {
    theme?: string,
    text?: string,
    color?: 'default' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark'
}

export default Pill

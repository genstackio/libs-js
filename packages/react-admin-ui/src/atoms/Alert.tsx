import React from 'react';
import clsx from 'clsx';

const colors = {
    default :'bg-purple-400',
    secondary :'bg-red-400',
    success : 'bg-green-600',
    info : 'bg-purple-700',
    warning : 'bg-yellow-400',
    danger : 'bg-red-600',
    light : 'bg-gray-200 text-gray-900', 
    dark : 'bg-gray-900',
}

export function Alert({color = 'default', text}: AlertProps) {
    return (
        <div className={clsx(
            colors[color] || colors['default'], 
            'px-4 py-4 leading-normal text-white my-5 h-14'
        )}>
  <p>{text}</p>
</div>
    );
}

export interface AlertProps {
    text?: string,
    color?: 'default' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark'
}

export default Alert

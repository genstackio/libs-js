import React from 'react';

export function Footer({content}: FooterProps) {
    return (
        <div className={'p-4 text-center text-sm'}>{content}</div>
    );
}

export interface FooterProps {
    content?: string,
}

export default Footer
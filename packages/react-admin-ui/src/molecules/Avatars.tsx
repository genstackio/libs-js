import React from 'react';

export function Avatars({items = []}: AvatarsProps) {
    return (
        <div>AVATARS ({items.length})</div>
    );
}

export interface AvatarsProps {
    items?: any[],
}

export default Avatars
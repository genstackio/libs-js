import React from 'react';
import Avatar from '../atoms/Avatar';

export function Avatars({items = []}: AvatarsProps) {
    return (
        <div className="-space-x-4">
            {items.map(item => (
            <Avatar names={item.names} image={item.image} size={item.size} shape={item.shape} status={item.status}></Avatar>
            ))}
        </div>
    );
}

export interface AvatarsProps {
    items?: {names?: any, image?: any, size?: any, shape?: any, status?:any}[],
}

export default Avatars

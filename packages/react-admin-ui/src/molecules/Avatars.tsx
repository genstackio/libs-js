import Avatar from '../atoms/Avatar';
import {image} from '../types';
export function Avatars({items = []}: AvatarsProps) {
    return (
        <div className="-space-x-4">
            {items.map(item => (
                <Avatar name={item.name} image={item.image} size={item.size} shape={item.shape} status={item.status} />
            ))}
        </div>
    );
}

export interface AvatarsProps {
    items?: {name: string, image?: image, size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl', shape?: 'circular' | 'rounded', status?: 'online' | 'offline' | 'busy'}[],
}

export default Avatars
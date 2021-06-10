import Avatar from '../atoms/Avatar';
import {image, shape, size, status} from '../types';

export function Avatars({items = []}: AvatarsProps) {
    return (
        <div className={'-space-x-4'}>
            {items.map(item => (
                <Avatar name={item.name} image={item.image} size={item.size} shape={item.shape} status={item.status} />
            ))}
        </div>
    );
}

export interface AvatarsProps {
    items?: {
        image?: image,
        name: string,
        shape?: shape,
        size?: size,
        status?: status,
    }[],
}

export default Avatars
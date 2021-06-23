import Avatar from '../atoms/Avatar';
import { avatar_item } from '../types';

export function Avatars({ items = [] }: AvatarsProps) {
    return (
        <div className={'-space-x-4'}>
            {items.map((item, i) => (
                <Avatar key={i} {...item} />
            ))}
        </div>
    );
}

export interface AvatarsProps {
    items?: avatar_item[];
}

export default Avatars;

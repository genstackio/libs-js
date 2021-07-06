import clsx from 'clsx';
import Avatar from '../atoms/Avatar';
import { avatar_item, class_name } from '../types';

export function Avatars({ className, items = [] }: AvatarsProps) {
    return (
        <div className={clsx('-space-x-4', className)}>
            {items.map((item, i) => (
                <Avatar key={i} {...item} />
            ))}
        </div>
    );
}

export interface AvatarsProps {
    className?: class_name;
    items?: avatar_item[];
}

export default Avatars;

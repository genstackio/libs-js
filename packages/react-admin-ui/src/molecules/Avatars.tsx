import Avatar from '../atoms/Avatar';

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
    items?: {name: string, image?: any, size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl', shape?: 'circular' | 'rounded', status?: 'online' | 'offline' | 'busy'}[],
}

export default Avatars
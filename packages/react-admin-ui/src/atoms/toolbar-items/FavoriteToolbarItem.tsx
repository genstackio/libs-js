import clsx from 'clsx';
import Icon from '../Icon';
import { class_name } from '../../types';

export function FavoriteToolbarItem({ className }: FavoriteToolbarItemProps) {
    return <Icon icon={'@favorite'} className={clsx('flex cursor-pointer', className)} />;
}

export interface FavoriteToolbarItemProps {
    className?: class_name;
}

export default FavoriteToolbarItem;

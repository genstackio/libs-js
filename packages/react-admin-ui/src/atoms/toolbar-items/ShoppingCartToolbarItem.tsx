import clsx from 'clsx';
import Icon from '../Icon';
import { class_name } from '../../types';

export function ShoppingCartToolbarItem({ className }: ShoppingCartToolbarItemProps) {
    return <Icon icon={'shopping_cart'} className={clsx('flex cursor-pointer', className)} />;
}

export interface ShoppingCartToolbarItemProps {
    className?: class_name;
}

export default ShoppingCartToolbarItem;

import ToolbarItem, { BaseToolbarItemProps } from '../ToolbarItem';

export function ShoppingCartToolbarItem(props: ShoppingCartToolbarItemProps) {
    return <ToolbarItem {...props} icon={'fa-shopping-cart'} activeIcon={'fa-cart-arrow-down'} />;
}

export type ShoppingCartToolbarItemProps = BaseToolbarItemProps;

// noinspection JSUnusedGlobalSymbols
export default ShoppingCartToolbarItem;

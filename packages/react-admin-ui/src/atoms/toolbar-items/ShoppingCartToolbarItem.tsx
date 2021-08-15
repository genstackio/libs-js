import ToolbarItem, { BaseToolbarItemProps } from '../ToolbarItem';

export function ShoppingCartToolbarItem(props: ShoppingCartToolbarItemProps) {
    return <ToolbarItem {...props} activeIcon={'fa-cart-arrow-down'} icon={'fa-shopping-cart'} />;
}

export type ShoppingCartToolbarItemProps = BaseToolbarItemProps;

// noinspection JSUnusedGlobalSymbols
export default ShoppingCartToolbarItem;

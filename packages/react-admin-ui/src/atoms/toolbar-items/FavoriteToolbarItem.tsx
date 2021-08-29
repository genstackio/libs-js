import ToolbarItem, { BaseToolbarItemProps } from '../ToolbarItem';

export function FavoriteToolbarItem(props: FavoriteToolbarItemProps) {
    return <ToolbarItem {...props} activeIcon={'fa-star'} icon={'fa-far--star'} />;
}

export type FavoriteToolbarItemProps = BaseToolbarItemProps;

// noinspection JSUnusedGlobalSymbols
export default FavoriteToolbarItem;

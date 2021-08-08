import ToolbarItem, { BaseToolbarItemProps } from '../ToolbarItem';

export function FavoriteToolbarItem(props: FavoriteToolbarItemProps) {
    return <ToolbarItem {...props} icon={'fa-far--star'} activeIcon={'fa-star'} />;
}

export type FavoriteToolbarItemProps = BaseToolbarItemProps;

// noinspection JSUnusedGlobalSymbols
export default FavoriteToolbarItem;

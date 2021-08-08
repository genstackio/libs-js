import ToolbarItem, { BaseToolbarItemProps } from '../ToolbarItem';

export function DarkModeToolbarItem(props: DarkModeToolbarItemProps) {
    return <ToolbarItem {...props} icon={'fa-far--moon'} activeIcon={'fa-far--lightbulb'} />;
}

export type DarkModeToolbarItemProps = BaseToolbarItemProps;

// noinspection JSUnusedGlobalSymbols
export default DarkModeToolbarItem;

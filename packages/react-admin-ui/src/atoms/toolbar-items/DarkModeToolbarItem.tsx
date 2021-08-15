import ToolbarItem, { BaseToolbarItemProps } from '../ToolbarItem';

export function DarkModeToolbarItem(props: DarkModeToolbarItemProps) {
    return <ToolbarItem {...props} activeIcon={'fa-far--lightbulb'} icon={'fa-far--moon'} />;
}

export type DarkModeToolbarItemProps = BaseToolbarItemProps;

// noinspection JSUnusedGlobalSymbols
export default DarkModeToolbarItem;

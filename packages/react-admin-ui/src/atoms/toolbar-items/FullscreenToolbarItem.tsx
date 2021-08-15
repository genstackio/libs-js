import ToolbarItem, { BaseToolbarItemProps } from '../ToolbarItem';
import useFullscreen from '@genstackio/react-contexts/lib/hooks/useFullscreen';

export function FullscreenToolbarItem(props: FullscreenToolbarItemProps) {
    const { active, toggle } = useFullscreen();

    return <ToolbarItem {...props} active={active} icon={'fa-expand'} onToggle={toggle} />;
}

export type FullscreenToolbarItemProps = BaseToolbarItemProps;

// noinspection JSUnusedGlobalSymbols
export default FullscreenToolbarItem;

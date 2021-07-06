import ToolbarItem, { BaseToolbarItemProps } from '../ToolbarItem';
import useFullscreen from '@genstackio/react-contexts/lib/hooks/useFullscreen';

export function FullscreenToolbarItem(props: FullscreenToolbarItemProps) {
    const { active, toggle } = useFullscreen();
    return <ToolbarItem {...props} icon={'fa-expand'} active={active} onToggle={toggle} />;
}

export type FullscreenToolbarItemProps = BaseToolbarItemProps;

export default FullscreenToolbarItem;

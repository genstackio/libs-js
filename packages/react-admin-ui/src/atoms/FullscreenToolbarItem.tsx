import { Icon } from './';
import { class_name } from '../types';
import clsx from 'clsx';
import useFullscreen from '@genstackio/react-contexts/lib/hooks/useFullscreen';

export function FullscreenToolbarItem({ className }: FullscreenToolbarItemProps) {
    const { active, toggle } = useFullscreen();

    const color = active ? 'primary' : 'inherit';

    return (
        <div className={clsx('rounded-2xl', className)}>
            <Icon icon={'fullscreen_icon'} color={color} onClick={toggle} className={clsx('cursor-pointer')} />
        </div>
    );
}

export interface FullscreenToolbarItemProps {
    className?: class_name;
    onChange?: (active: boolean) => void;
}

export default FullscreenToolbarItem;

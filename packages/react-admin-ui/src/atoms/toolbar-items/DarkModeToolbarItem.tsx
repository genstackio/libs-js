import clsx from 'clsx';
import Icon from '../Icon';
import { class_name } from '../../types';
import { useToggle } from '../../hooks/useToggle';

export function DarkModeToolbarItem({ className }: DarkModeToolbarItemProps) {
    const [darkMode, toggle] = useToggle();
    return (
        <Icon
            icon={darkMode ? 'emoji_objects_outlined' : 'brightness_3_outlined'}
            onClick={toggle}
            className={clsx('cursor-pointer', className)}
        />
    );
}

export interface DarkModeToolbarItemProps {
    className?: class_name;
}

export default DarkModeToolbarItem;

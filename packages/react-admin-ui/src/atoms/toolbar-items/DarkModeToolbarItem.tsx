import clsx from 'clsx';
import Icon from '../Icon';
import { class_name } from '../../types';
import { useDarkModeToggle } from '@genstackio/react-contexts';

export function DarkModeToolbarItem({ className }: DarkModeToolbarItemProps) {
    const [darkMode, toggle] = useDarkModeToggle();
    return (
        <Icon
            icon={darkMode ? 'emoji_objects_outlined' : 'brightness_3_outlined'}
            onClick={toggle}
            className={clsx('flex cursor-pointer', className)}
        />
    );
}

export interface DarkModeToolbarItemProps {
    className?: class_name;
}

export default DarkModeToolbarItem;

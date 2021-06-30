import clsx from 'clsx';
import { class_name } from '../types';

export function MainToolbar({ className }: MainToolbarProps) {
    return <div className={clsx(className)}>MAIN TOOLBAR</div>;
}

/* eslint @typescript-eslint/no-empty-interface: 0 */
export interface MainToolbarProps {
    className?: class_name;
}

export default MainToolbar;

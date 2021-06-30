import { class_name } from '../types';
import clsx from 'clsx';

export function MainMenu({ className }: MainMenuProps) {
    return <div className={clsx(className)}>MAIN MENU</div>;
}

/* eslint @typescript-eslint/no-empty-interface: 0 */
export interface MainMenuProps {
    className?: class_name;
}

export default MainMenu;

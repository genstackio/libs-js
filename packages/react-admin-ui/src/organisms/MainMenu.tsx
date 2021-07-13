import clsx from 'clsx';
import { WithClassName } from '../withs';

export function MainMenu({ className }: MainMenuProps) {
    return <div className={clsx(className)}>MAIN MENU</div>;
}

export type MainMenuProps = WithClassName;

export default MainMenu;

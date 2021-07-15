import { WithClassName } from '../withs';

export function MainMenu({ className }: MainMenuProps) {
    return <div className={className}>MAIN MENU</div>;
}

export type MainMenuProps = WithClassName;

export default MainMenu;

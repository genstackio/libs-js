import { WithClassName } from '../withs';

export function MainToolbar({ className }: MainToolbarProps) {
    return <div className={className}>MAIN TOOLBAR</div>;
}

export type MainToolbarProps = WithClassName;

export default MainToolbar;

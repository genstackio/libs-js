import clsx from 'clsx';
import { WithClassName } from '../withs';

export function MainToolbar({ className }: MainToolbarProps) {
    return <div className={clsx(className)}>MAIN TOOLBAR</div>;
}

export type MainToolbarProps = WithClassName;

export default MainToolbar;

import clsx from 'clsx';
import Button from './Button';
import { WithClassName } from '../withs';

export function Buttons({ className, buttons = [] }: ButtonsProps) {
    return (
        <div className={className}>
            {buttons.map(({ className, ...b }, i) => (
                <Button key={i} className={clsx('mr-2', className)} {...b} />
            ))}
        </div>
    );
}

export interface ButtonsProps extends WithClassName {
    buttons?: any[];
}

export default Buttons;

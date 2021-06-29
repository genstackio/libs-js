import { class_name } from '../types';
import Button from './Button';
import clsx from 'clsx';

export function Buttons({ className, buttons = [] }: ButtonsProps) {
    return (
        <div className={className}>
            {buttons.map(({ className, ...b }, i) => (
                <Button key={i} className={clsx('mr-2', className)} {...b} />
            ))}
        </div>
    );
}

export interface ButtonsProps {
    className?: class_name;
    buttons?: any[];
}

export default Buttons;

import { ReactNode } from 'react';
import { Button } from '../atoms/Button';
import { action_item, class_name } from '../types';
import clsx from 'clsx';

export function BodyMainBar({ className, actions = [], children }: BodyMainBarProps) {
    return (
        <div className={clsx('flex justify-between items-center flex-wrap', className)}>
            <div className={'flex-1'}>{children || ''}</div>
            <div className={'x-buttons'}>
                {actions.map(({ color, variant, target, label, icon }, i) => (
                    <div className={'xs:mt-2 xs:w-full'} key={i}>
                        <Button color={color} variant={variant} onClick={target} icon={icon}>
                            {label}
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export interface BodyMainBarProps {
    className?: class_name;
    actions: action_item[];
    children: ReactNode;
}

export default BodyMainBar;

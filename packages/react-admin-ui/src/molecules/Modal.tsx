import { MouseEventHandler } from 'react';
import clsx from 'clsx';
import Button from '../atoms/Button';
import MuiModal from '@material-ui/core/Modal';
import { action_item, flag } from '../types';
import { WithChildren, WithClassName, WithTitle } from '../withs';

export function Modal({ className, buttonsItems = [], children, onClose, opened = false, title }: ModalProps) {
    return (
        <MuiModal open={opened} className={clsx('flex justify-center items-center', className)}>
            <div className={'bg-clear border border-disabled rounded-md w-8/12 sm:w-11/12 xs:w-full'}>
                <div className={'flex flex-row-reverse justify-between items-center m-4'}>
                    <Button color={'dark'} onClick={onClose}>
                        X
                    </Button>
                    {title && <div className={'text-xl font-bold'}>{title}</div>}
                </div>
                <hr />
                {children || ''}
                {buttonsItems.length && (
                    <div>
                        <hr />
                        <div className={'flex justify-end space-x-4 m-4'}>
                            {buttonsItems.map(({ label, variant, color, target }, i) => (
                                <Button key={i} variant={variant} color={color} onClick={target}>
                                    {label}
                                </Button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </MuiModal>
    );
}

export interface ModalProps extends WithClassName, WithChildren, WithTitle {
    buttonsItems?: action_item[];
    opened?: flag;
    onClose?: MouseEventHandler;
}

// noinspection JSUnusedGlobalSymbols
export default Modal;

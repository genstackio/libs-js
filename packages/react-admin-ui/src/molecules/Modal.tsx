import {MouseEventHandler} from 'react';
import {Button} from "../atoms";
import MuiModal from "@material-ui/core/Modal";
import {action_item, children, flag, rich_text} from "../types";

export function Modal({buttonsItems = [], children, onClose, opened = false, title}: ModalProps) {
    return (
        <MuiModal className={'flex justify-center items-center'} open={opened}>
            <div className={'bg-white border border-gray-300 rounded-md w-8/12 sm:w-11/12 xs:w-full'}>
                <div className={'flex flex-row-reverse justify-between items-center m-4'}>
                    <Button color={'dark'} onClick={onClose}>X</Button>
                    {title && <div className={'text-xl font-bold'}>{title}</div>}
                </div>
                <hr />
                {children || ''}
                {buttonsItems.length && <div>
                    <hr />
                    <div className={'flex justify-end space-x-4 m-4'}>
                        {buttonsItems.map(({ label, variant, color, target }) => (
                            <Button variant={variant} color={color} onClick={target}>{label}</Button>
                        ))}
                    </div>
                </div>}
            </div>
        </MuiModal>
    );
}

export interface ModalProps {
    buttonsItems?: action_item[],
    children?: children,
    opened?: flag,
    onClose?: MouseEventHandler,
    title?: rich_text,
}

export default Modal
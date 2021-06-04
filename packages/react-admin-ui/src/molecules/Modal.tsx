import {MouseEventHandler, ReactNode} from 'react';
import {Button} from "../atoms";
import MuiModal from "@material-ui/core/Modal";
import {box_color, box_variant} from "../types";

export function Modal({children, title, buttonsItems, opened = false, onClose}: ModalProps) {
    return (
        <MuiModal className={'flex justify-center items-center'} open={opened}>
            <div className={'bg-white border border-gray-300 rounded-md w-8/12 sm:w-11/12 xs:w-full'}>
                <div className={'flex flex-row-reverse justify-between items-center m-4'}>
                    <Button color={'dark'} onClick={onClose}>X</Button>
                    {title && <div className={'text-xl font-bold'}>{title}</div>}
                </div>
                <hr />
                {children || ''}
                {buttonsItems && <div>
                    <hr />
                    <div className={'flex justify-end space-x-4 m-4'}>
                        {buttonsItems.map(({ label, variant, color, onClick }) => (
                            <Button variant={variant} color={color} onClick={onClick}>{label}</Button>
                        ))}
                    </div>
                </div>}
            </div>
        </MuiModal>
    );
}

export interface ModalProps {
    title?: string,
    buttonsItems?: {variant?: box_variant, color?: box_color, onClick?: Function|string, label?: string}[],
    opened?: boolean,
    onClose?: MouseEventHandler,
    children?: ReactNode,
}

export default Modal
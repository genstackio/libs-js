import { ComponentType, useCallback, useState } from 'react';
import ConfirmModal from '../molecules/ConfirmModal';
import { confirmable_options } from '../types';
import stopPrevent from '../utils/stopPrevent';

export function useConfirmable({
    confirmTitle,
    confirmText,
    confirmDanger = false,
    confirmKind = undefined,
    confirm = true,
    onConfirm,
    onCancel,
}: confirmable_options): [Function, ComponentType<any>] {
    const [opened, setOpened] = useState<boolean>(false);
    const handleCancel = useCallback(() => {
        setOpened(false);
        onCancel && onCancel();
    }, [setOpened, onCancel]);
    const handleConfirm = useCallback(() => {
        setOpened(false);
        onConfirm && onConfirm();
    }, [setOpened, onConfirm]);
    const onClick = useCallback(
        (e) => {
            stopPrevent(e);
            setOpened(true);
        },
        [setOpened, onConfirm],
    );

    const Confirmable = useCallback(
        ({ children }) =>
            confirm ? (
                <>
                    {children}
                    <ConfirmModal
                        kind={confirmKind}
                        danger={confirmDanger}
                        title={confirmTitle}
                        onConfirm={handleConfirm}
                        onCancel={handleCancel}
                        opened={opened}
                    >
                        {confirmText}
                    </ConfirmModal>
                </>
            ) : (
                children
            ),
        [confirm, confirmTitle, confirmText, onConfirm, handleCancel, opened],
    );

    return [confirm ? onClick : onConfirm, Confirmable] as [Function, ComponentType<any>];
}

export default useConfirmable;

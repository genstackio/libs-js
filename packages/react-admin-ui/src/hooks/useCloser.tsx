import useToggle from './useToggle';
import Clickable from '../atoms/Clickable';
import CloseIcon from '@material-ui/icons/Close';
import { ComponentType, useCallback } from 'react';

export function useCloser({
    onClose,
    closable = false,
    ...rest
}: {
    onClose?: Function;
    closable?: boolean;
    [key: string]: any;
}): [ComponentType<any>, boolean, any] {
    const [show, handleClick] = useToggle(true, onClose);

    const Closer = useCallback(
        () => (
            <Clickable onClick={handleClick} visible={closable}>
                <CloseIcon />
            </Clickable>
        ),
        [handleClick, closable],
    );

    return [Closer, show, rest];
}

// noinspection JSUnusedGlobalSymbols
export default useCloser;

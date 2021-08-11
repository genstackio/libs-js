import { useCallback, useState } from 'react';

export function useToggle(defaultValue = false, onClick?: Function): [boolean, Function, (value: boolean) => void] {
    const [show, setShow] = useState(defaultValue);
    const handleClick = useCallback(() => {
        setShow(!show);
        onClick && onClick();
    }, [show, setShow, onClick]);

    return [show, handleClick, setShow];
}

export default useToggle;

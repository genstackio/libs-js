import { useCallback, useState } from 'react';

export function useToggle(defaultValue = false): [boolean, Function, (value: boolean) => void] {
    const [show, setShow] = useState(defaultValue);
    const handleClick = useCallback(() => {
        setShow(!show);
    }, [show, setShow]);

    return [show, handleClick, setShow];
}

export default useToggle;

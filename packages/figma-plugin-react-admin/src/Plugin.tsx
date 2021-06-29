import { useCallback } from 'react';

export function Plugin({ dispatch }: PluginProps) {
    const onClick2 = useCallback(() => {
        dispatch({ type: 'close' });
    }, [dispatch]);
    const onClick3 = useCallback(() => {
        dispatch({ type: 'text', value: 'Hello from Typescript!!' });
    }, [dispatch]);
    const onClick4 = useCallback(() => {
        dispatch({ type: 'star' });
    }, [dispatch]);
    const onClick5 = useCallback(() => {
        dispatch({ type: 'blockButton' });
    }, [dispatch]);
    const onClick6 = useCallback(() => {
        dispatch({ type: 'rectangleStar' });
    }, [dispatch]);
    return (
        <>
            <div className={'bg-red-500'}>HELLO WORLD</div>
            <div onClick={onClick2}>Close</div>
            <div onClick={onClick3}>Add Text</div>
            <div onClick={onClick4}>Add Star</div>
            <div onClick={onClick5}>Add Block </div>
            <div onClick={onClick6}>Add Rectangle with star </div>
        </>
    );
}

export interface PluginProps {
    dispatch: Function;
}

export default Plugin;

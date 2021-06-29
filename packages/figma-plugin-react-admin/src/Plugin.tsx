import {useCallback} from "react";

export function Plugin({dispatch}: PluginProps) {
    const onClick = useCallback(() => {
        dispatch({type: 'close'});
    }, [dispatch]);
    const onClick2 = useCallback(() => {
        dispatch({type: 'close'});
    }, [dispatch]);
    return (
        <>
            <div className={'bg-red-500'} onClick={onClick}>HELLO WORLD</div>
            <div onClick={onClick2}>HELLO WORLD 2</div>
        </>
    );
}

export interface PluginProps {
    dispatch: Function;
}

export default Plugin

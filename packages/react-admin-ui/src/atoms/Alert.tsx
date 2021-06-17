import {useCallback, useState} from 'react';
import CloseIcon from '@material-ui/icons/Close';
import Panel, {PanelProps} from "./Panel";

export function Alert({children, closable = false, color = 'primary', variant = 'contained', ...props}: AlertProps) {
    const [show, setShow] = useState(true);
    const handleClick = useCallback(() => setShow(false), [setShow]);
    if (!show) return null
    return (
        <Panel color={color} variant={variant} {...props}>
            <div className={'w-full'}>{children || ''}</div>
            {closable && (
                <div className={'cursor-pointer'}>
                    <CloseIcon onClick={handleClick} />
                </div>
            )}
        </Panel>
    );
}

export interface AlertProps extends PanelProps {
    closable?: boolean,
}

export default Alert
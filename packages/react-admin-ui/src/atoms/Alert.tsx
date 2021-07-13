import CloseIcon from '@material-ui/icons/Close';
import Panel, { PanelProps } from './Panel';
import { class_name, flag } from '../types';
import Clickable from './Clickable';
import { useToggle } from '../hooks/useToggle';
import clsx from 'clsx';

export function Alert({ children, contentClassName, closableClassName, closable = false, ...props }: AlertProps) {
    const [show, handleClick] = useToggle(true);
    if (!show) return null;
    return (
        <Panel {...props}>
            <div className={clsx('w-full', contentClassName)}>{children || ''}</div>
            <Clickable visible={closable} className={clsx('cursor-pointer', closableClassName)} onClick={handleClick}>
                <CloseIcon />
            </Clickable>
        </Panel>
    );
}

export interface AlertProps extends PanelProps {
    closable?: flag;
    contentClassName?: class_name;
    closableClassName?: class_name;
}

export default Alert;

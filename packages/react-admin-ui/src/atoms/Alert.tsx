import CloseIcon from '@material-ui/icons/Close';
import Div from './Div';
import Clickable from './Clickable';
import Panel, { PanelProps } from './Panel';
import { useToggle } from '../hooks/useToggle';
import { WithClosable } from '../withs';

export function Alert({ children, closable = false, ...props }: AlertProps) {
    const [show, handleClick] = useToggle(true);
    return show ? (
        <Panel {...props}>
            <Div full>{children}</Div>
            <Clickable visible={closable} onClick={handleClick}>
                <CloseIcon />
            </Clickable>
        </Panel>
    ) : null;
}

export interface AlertProps extends PanelProps, WithClosable {}

// noinspection JSUnusedGlobalSymbols
export default Alert;

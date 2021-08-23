import clsx from 'clsx';
import CloseIcon from '@material-ui/icons/Close';
import Div from './Div';
import Clickable from './Clickable';
import Panel, { PanelProps } from './Panel';
import { useToggle } from '../hooks/useToggle';
import { WithButton, WithCenter, WithClosable, WithIcon } from '../withs';
import Button from './Button';
import { box_variant } from '../mappings/box-variants';
import Icon from './Icon';

export function Alert({
    children,
    onClose,
    closable = false,
    btnClassName,
    btnColor,
    btnCorner,
    btnIcon,
    btnEndIcon,
    btnType,
    btnTarget,
    btnLabel,
    btnSize,
    color,
    icon,
    iconSize,
    center,
    ...props
}: AlertProps) {
    const [show, handleClick] = useToggle(true, onClose);
    return show ? (
        <Panel {...props} color={color} className={clsx('space-x-8', center && 'items-center justify-center')}>
            <Icon icon={icon} size={iconSize} />
            <Div full>{children}</Div>
            {btnLabel && (
                <Button
                    variant={btnType as box_variant}
                    color={btnColor || color}
                    corner={btnCorner}
                    icon={btnIcon}
                    endIcon={btnEndIcon}
                    size={btnSize}
                    className={btnClassName}
                >
                    {btnLabel}
                </Button>
            )}
            <Clickable visible={closable} onClick={handleClick}>
                <CloseIcon />
            </Clickable>
        </Panel>
    ) : null;
}

export interface AlertProps extends PanelProps, WithClosable, WithButton, WithIcon, WithCenter {}

// noinspection JSUnusedGlobalSymbols
export default Alert;

import { useCallback, useState } from 'react';
import clsx from 'clsx';
import Clickable from '../atoms/Clickable';
import Popper from '@material-ui/core/Popper';
import { children, flag } from '../types';
import { AsComponent } from '../as';
import { WithPlacement } from '../withs';

export function Expandable({ children, className, expandedChildren, placement = 'bottom-start' }: ExpandableProps) {
    const [opened, setOpened] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = useCallback(
        (event) => {
            setOpened(!opened);
            setAnchorEl(anchorEl ? null : event.currentTarget);
        },
        [opened, anchorEl, setOpened, setAnchorEl],
    );
    const handleClickAway = useCallback(() => {
        setOpened(false);
        setAnchorEl(null);
    }, [setOpened, setAnchorEl]);

    return (
        <Clickable
            onClick={handleClick}
            onClickAway={handleClickAway}
            className={clsx('flex items-center cursor-pointer', className)}
        >
            {children && ('function' === typeof children ? children(opened) : children)}
            {!!expandedChildren && (
                <Popper anchorEl={anchorEl} open={opened} placement={placement} transition>
                    {'function' === typeof expandedChildren ? expandedChildren(opened) : expandedChildren}
                </Popper>
            )}
        </Clickable>
    );
}

export interface ExpandableProps extends AsComponent, WithPlacement {
    children?: children | ((opened: flag) => children);
    expandedChildren?: children | ((opened: flag) => children);
}

// noinspection JSUnusedGlobalSymbols
export default Expandable;

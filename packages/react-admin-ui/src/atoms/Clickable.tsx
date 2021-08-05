import { useMemo } from 'react';
import { flag } from '../types';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { WithChildren, WithClassName, WithOnClick, WithOnClickAway, WithStyle } from '../withs';
import clsx from 'clsx';

export function Clickable({
    className,
    onClick,
    style,
    children,
    optional = false,
    inline = false,
    onClickAway,
    visible = true,
}: ClickableProps) {
    const extraProps = useMemo(
        () => ({ className: clsx(className, !!onClick && 'cursor-pointer'), style }),
        [className, style, onClick],
    );
    if (!visible) return null;
    let content;
    if (!onClick) {
        if (optional) return null;
        if (!children) {
            if (className) {
                content = inline ? <span {...extraProps} /> : <div {...extraProps} />;
                return onClickAway ? (
                    <ClickAwayListener onClickAway={onClickAway}>{content}</ClickAwayListener>
                ) : (
                    content
                );
            }
            return null;
        }
        if (className) {
            content = inline ? <span {...extraProps}>{children}</span> : <div {...extraProps}>{children}</div>;
            return onClickAway ? <ClickAwayListener onClickAway={onClickAway}>{content}</ClickAwayListener> : content;
        }
        content = children || null;
        return onClickAway ? <ClickAwayListener onClickAway={onClickAway}>{content}</ClickAwayListener> : content;
    }
    if ('string' === typeof onClick) {
        content = (
            <a className={className} href={onClick as string} style={style}>
                {children || ''}
            </a>
        );
        return onClickAway ? <ClickAwayListener onClickAway={onClickAway}>{content}</ClickAwayListener> : content;
    }

    content = inline ? (
        <span onClick={onClick as any} {...extraProps}>
            {children || ''}
        </span>
    ) : (
        <div onClick={onClick as any} {...extraProps}>
            {children || ''}
        </div>
    );
    return onClickAway ? <ClickAwayListener onClickAway={onClickAway}>{content}</ClickAwayListener> : content;
}

export interface ClickableProps extends WithClassName, WithChildren, WithOnClick, WithOnClickAway, WithStyle {
    inline?: flag;
    optional?: flag;
    visible?: flag;
}

export default Clickable;

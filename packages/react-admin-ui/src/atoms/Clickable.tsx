import { children, class_name, flag, target } from '../types';
import { useMemo } from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import * as React from 'react';

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
    const extraProps = useMemo(() => ({ className, style }), [className, style]);
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

export interface ClickableProps {
    children?: children;
    className?: class_name;
    onClick?: target;
    inline?: flag;
    optional?: flag;
    style?: any;
    onClickAway?: (event: React.MouseEvent<Document>) => void;
    visible?: flag;
}

export default Clickable;

import { useMemo } from 'react';
import clsx from 'clsx';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { flag } from '../types';
import { AsWrapper } from '../as';
import { WithOnClick, WithOnClickAway, WithStyle } from '../withs';

export function Clickable({
    children,
    className,
    inline = false,
    onClick,
    onClickAway,
    optional = false,
    style,
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
    let realOnClick: Function | undefined = undefined;
    if ('object' === typeof onClick && !!onClick.href) {
        if (onClick.onClick) {
            realOnClick = onClick.onClick;
        }
        onClick = onClick.href;
    }
    if ('string' === typeof onClick) {
        content = (
            <a
                href={onClick as string}
                style={style}
                className={className}
                {...(realOnClick ? { onClick: realOnClick as any } : {})}
            >
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

export interface ClickableProps extends AsWrapper, WithOnClick, WithOnClickAway, WithStyle {
    inline?: flag;
    optional?: flag;
    visible?: flag;
}

// noinspection JSUnusedGlobalSymbols
export default Clickable;

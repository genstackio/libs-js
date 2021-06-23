import {useCallback} from 'react';
import clsx from "clsx";
import Icon from "./Icon";
import buttonClass from "../utils/buttonClass";
import {box_color, box_variant, children, class_name, flag, icon, target} from '../types';
import {Spinner} from "./Spinner";

export function Button({children, loading = false, className, color = 'primary', disabled,  icon, large, onClick, variant = 'filled'}: ButtonProps) {
    const handleClick = useCallback (event => {
        ('function' === typeof onClick) && onClick(event);
        ('string' === typeof onClick) && (location.href = onClick);
    }, [onClick]);
    disabled = disabled || loading;
    return (
        <button
            disabled={disabled}
            className={clsx(className, buttonClass({color, variant, disabled}), 'py-2 px-4 rounded inline-flex items-center', disabled && 'opacity-50 cursor-not-allowed', large && 'w-60')}
            onClick={handleClick}
        >
            {loading && <Spinner variant={'circle'} size={'md'} color={'light'} />}
            {!loading && (
                <>
                    <Icon icon={icon} />
                    {children || ''}
                </>
            )}
        </button>
    );
}

export interface ButtonProps {
    children?: children,
    className?: class_name,
    color?: box_color,
    disabled?: flag,
    loading?: flag,
    icon?: icon,
    large?: flag,
    onClick?: target,
    variant?: box_variant,
}

export default Button

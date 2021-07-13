import { useCallback, useMemo } from 'react';
import clsx from 'clsx';
import Icon from './Icon';
import buttonClass from '../utils/buttonClass';
import { class_name, target } from '../types';
import { Spinner } from './Spinner';
import { BoxProvider } from '@genstackio/react-contexts/lib/contexts/BoxContext';
import cornerClass from '../mappings/corners';
import {
    WithBox,
    WithChildren,
    WithClassName,
    WithCorner,
    WithIcon,
    WithSize,
    WithLoading,
    WithDisabled,
} from '../withs';

export function Button({
    children,
    loading = false,
    className,
    spinnerClassName,
    color = 'primary',
    disabled,
    icon,
    size = 'md',
    onClick,
    variant = 'filled',
    corner = 'rounded-xxsmall',
}: ButtonProps) {
    const handleClick = useCallback(
        (event) => {
            'function' === typeof onClick && onClick(event);
            'string' === typeof onClick && (location.href = onClick);
        },
        [onClick],
    );
    disabled = disabled || loading;
    const boxProviderValue = useMemo(() => ({ color, variant }), [color, variant]);
    return (
        <button
            disabled={disabled}
            className={clsx(
                buttonClass({ size, color, variant, disabled }),
                cornerClass(corner),
                'py-2 px-4 inline-flex items-center box-border',
                disabled && 'opacity-50 cursor-not-allowed',
                'justify-center',
                className,
            )}
            onClick={handleClick}
        >
            <BoxProvider value={boxProviderValue}>
                {loading && (
                    <Spinner variant={'circle'} size={'md'} color={'light'} className={clsx(spinnerClassName)} />
                )}
                {!loading && (
                    <>
                        <Icon icon={icon} />
                        {children || ''}
                    </>
                )}
            </BoxProvider>
        </button>
    );
}

export interface ButtonProps
    extends WithClassName,
        WithBox,
        WithChildren,
        WithIcon,
        WithSize,
        WithCorner,
        WithDisabled,
        WithLoading {
    spinnerClassName?: class_name;
    onClick?: target;
}

export default Button;

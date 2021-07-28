import { useCallback, useMemo } from 'react';
import clsx from 'clsx';
import Icon from './Icon';
import buttonClass from '../utils/buttonClass';
import { class_name, flag, target } from '../types';
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
    WithConfirm,
} from '../withs';
import { useConfirmable } from '../hooks';

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
    confirm = false,
    confirmTitle,
    confirmText,
    confirmKind,
    confirmDanger,
    autoFocus = false,
}: ButtonProps) {
    const handleClick = useCallback(
        (event) => {
            'function' === typeof onClick && onClick(event);
            'string' === typeof onClick && (location.href = onClick);
        },
        [onClick],
    );
    const [handleButtonClick, Confirmable] = useConfirmable({
        onConfirm: handleClick,
        confirm,
        confirmKind,
        confirmDanger,
        confirmTitle,
        confirmText,
    });
    disabled = disabled || loading;
    const boxProviderValue = useMemo(() => ({ color, variant }), [color, variant]);

    const content = (
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
            onClick={handleButtonClick as any}
            autoFocus={autoFocus}
        >
            <BoxProvider value={boxProviderValue}>
                {loading && (
                    <Spinner variant={'circle'} size={'md'} color={'light'} className={clsx(spinnerClassName)} />
                )}
                {!loading && (
                    <>
                        <Icon icon={icon} className={children ? 'mr-2' : undefined} />
                        {children || ''}
                    </>
                )}
            </BoxProvider>
        </button>
    );

    return <Confirmable>{content}</Confirmable>;
}

export interface ButtonProps
    extends WithClassName,
        WithBox,
        WithChildren,
        WithIcon,
        WithSize,
        WithCorner,
        WithDisabled,
        WithLoading,
        WithConfirm {
    spinnerClassName?: class_name;
    onClick?: target;
    autoFocus?: flag;
}

export default Button;

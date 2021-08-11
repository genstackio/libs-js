import { useCallback, useMemo } from 'react';
import clsx from 'clsx';
import Icon from './Icon';
import buttonClass from '../utils/buttonClass';
import { class_name, flag } from '../types';
import { Spinner } from './Spinner';
import { BoxProvider } from '@genstackio/react-contexts/lib/contexts/BoxContext';
import cornerClass from '../mappings/corners';
import {
    WithCorner,
    WithIcon,
    WithSize,
    WithLoading,
    WithDisabled,
    WithConfirm,
    WithOnClick,
    WithAutoFocus,
    WithEndIcon,
    WithLabel,
} from '../withs';
import { useConfirmable } from '../hooks';
import { AsBoxWrapper } from '../as';

export function Button({
    children,
    container,
    containerClassName,
    loading = false,
    className,
    spinnerClassName,
    color = 'primary',
    disabled,
    icon,
    iconSize,
    size = 'md',
    onClick,
    variant = 'contained',
    corner = 'rounded-xxsmall',
    confirm = false,
    confirmTitle,
    confirmText,
    confirmKind,
    confirmDanger,
    autoFocus = false,
    endIcon,
    endIconSize,
    label,
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

    if (!label && !children && !icon && !endIcon) return null;

    let content = (
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
                        <Icon icon={icon} size={iconSize} className={children && icon ? 'mr-2' : undefined} />
                        {label || children || ''}
                        <Icon icon={endIcon} size={endIconSize} className={children && endIcon ? 'ml-2' : undefined} />
                    </>
                )}
            </BoxProvider>
        </button>
    );

    content = <Confirmable>{content}</Confirmable>;

    return container ? <div className={containerClassName}>{content}</div> : content;
}

export interface ButtonProps
    extends AsBoxWrapper,
        WithLabel,
        WithIcon,
        WithEndIcon,
        WithSize,
        WithCorner,
        WithDisabled,
        WithLoading,
        WithOnClick,
        WithAutoFocus,
        WithConfirm {
    spinnerClassName?: class_name;
    container?: flag;
    containerClassName?: class_name;
}

// noinspection JSUnusedGlobalSymbols
export default Button;

import { useCallback, useMemo } from 'react';
import clsx from 'clsx';
import Icon from './Icon';
import buttonClass from '../mappings/buttons';
import { class_name, flag } from '../types';
import { Spinner } from './Spinner';
import { BoxProvider } from '@genstackio/react-contexts/lib/contexts/BoxContext';
import cornerClass from '../mappings/corners';
import useConfirmable from '../hooks/useConfirmable';
import { AsBoxWrapper } from '../as';
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
import useAmbiance from '@genstackio/react-contexts/lib/hooks/useAmbiance';

export function Button({
    autoFocus = false,
    children,
    container,
    containerClassName,
    loading = false,
    className,
    spinnerClassName,
    color = 'primary',
    confirm = false,
    confirmDanger,
    confirmKind,
    confirmText,
    confirmTitle,
    corner = undefined,
    disabled,
    endIcon,
    endIconSize,
    icon,
    iconSize,
    label,
    onClick,
    size = 'md',
    variant = 'contained',
    'data-intercom-target': dataIntercomTarget = undefined,
}: ButtonProps) {
    const { buttonCorner = 'rounded-xxsmall' } = useAmbiance();
    corner = (corner || buttonCorner) as any;
    const handleClick = useCallback(
        (event) => {
            'function' === typeof onClick && onClick(event);
            'string' === typeof onClick && (location.href = onClick);
            'object' === typeof onClick && !!onClick.onClick && onClick.onClick(event);
            'object' === typeof onClick && !!onClick.href && (location.href = onClick.href);
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
    const box = useMemo(() => ({ color, variant }), [color, variant]);

    if (!label && !children && !icon && !endIcon) return null;

    const xtra = dataIntercomTarget ? { 'data-intercom-target': dataIntercomTarget } : {};

    let content = (
        <button
            autoFocus={autoFocus}
            disabled={disabled}
            onClick={handleButtonClick as any}
            className={clsx(
                buttonClass({ size, color, variant, disabled }),
                cornerClass(corner),
                'py-2 px-4 inline-flex items-center box-border',
                disabled && 'cursor-not-allowed',
                'justify-center',
                className,
            )}
            {...xtra}
        >
            <BoxProvider value={box}>
                {loading && (
                    <Spinner
                        variant={'circle'}
                        size={'md'}
                        color={'light'}
                        className={clsx(spinnerClassName, 'mr-2')}
                    />
                )}
                <Icon icon={icon} size={iconSize} className={(children || label) && icon ? 'mr-2' : undefined} />
                {label || children || ''}
                <Icon
                    icon={endIcon}
                    size={endIconSize}
                    className={(children || label) && endIcon ? 'ml-2' : undefined}
                />
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

import {
    WithAutoFocus,
    WithChildren,
    WithClassName,
    WithDefaultValues,
    WithDisabled,
    WithErrors,
    WithField,
    WithHelper,
    WithKind,
    WithLabel,
    WithName,
    WithOnChange,
    WithOptions,
    WithPlaceholder,
    WithRegister,
    WithRequired,
    WithVariantOfField,
} from './withs';

export interface AsField
    extends WithClassName,
        WithName,
        WithDisabled,
        WithHelper,
        WithRegister,
        WithRequired,
        WithErrors,
        WithField,
        WithLabel,
        WithOptions,
        WithOnChange,
        WithDefaultValues,
        WithAutoFocus,
        WithPlaceholder,
        WithVariantOfField,
        WithKind {}

export interface AsWrapper extends WithClassName, WithChildren {}

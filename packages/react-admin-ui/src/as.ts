import {
    WithAutoFocus,
    WithChildren,
    WithClassName,
    WithDefaultValueAsBoolean,
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
    WithValue,
    WithValuesOfSelect,
    WithVariantOfField,
} from './withs';

export type AsComponent = WithClassName;

export interface AsField
    extends AsComponent,
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

export interface AsFlagField extends AsField, WithDefaultValueAsBoolean {}
export interface AsTextField extends AsField, WithValue {}

export interface AsChoiceField extends AsField, WithValuesOfSelect {}

export interface AsWrapper extends AsComponent, WithChildren {}

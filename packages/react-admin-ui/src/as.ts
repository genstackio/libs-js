import {
    WithClasses,
    WithAutoFocus,
    WithBox,
    WithChildren,
    WithClassName,
    WithColorOfBox,
    WithDefaultValue,
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
    WithVariantOfBlock,
    WithVariantOfField, WithValueAs, WithDeps, WithConvertValue,
} from './withs';

export type AsComponent = WithClassName;

export interface AsBox extends AsComponent, WithBox {}
export interface AsBoxWrapper extends AsWrapper, WithBox {}
export interface AsBlock extends AsWrapper, WithColorOfBox, WithVariantOfBlock {}

export interface AsField
    extends AsComponent,
        WithClasses,
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
        WithValueAs,
        WithConvertValue,
        WithDeps,
        WithKind {}

export interface AsFlagField extends AsField, WithDefaultValueAsBoolean {}
export interface AsTextField extends AsField, WithValue {}

export interface AsChoiceField extends AsField, WithValuesOfSelect, WithDefaultValue {}

export interface AsWrapper extends AsComponent, WithChildren {}

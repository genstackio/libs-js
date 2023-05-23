import { ChangeEventHandler, ComponentType, MouseEvent, MouseEventHandler } from 'react';
import { children, rich_text } from './types';
import { class_name, image, flag, target } from '@genstackio/types';

export * from '@genstackio/types/lib/withs';

export interface WithButtonLabel<T = rich_text> {
    buttonLabel?: T;
}
export interface WithButton2Label<T = rich_text> {
    button2Label?: T;
}
export interface WithButton3Label<T = rich_text> {
    button3Label?: T;
}
export interface WithButtonTarget<T = string | Function> {
    buttonTarget?: T;
}
export interface WithButton2Target {
    button2Target?: string | Function;
}
export interface WithButton3Target {
    button3Target?: string | Function;
}
export interface WithButtonFormat {
    buttonFormat?: string;
}
export interface WithButton2Format {
    button2Format?: string;
}
export interface WithButton3Format {
    button3Format?: string;
}
export interface WithButtonDisabled {
    buttonDisabled?: boolean;
}
export interface WithButton2Disabled {
    button2Disabled?: boolean;
}
export interface WithButton3Disabled {
    button3Disabled?: boolean;
}
export interface WithButton<T = any>
    extends WithButtonFormat,
        WithButtonLabel,
        WithButtonTarget<T>,
        WithButtonDisabled {}
export interface WithButton2 extends WithButton2Format, WithButton2Label, WithButton2Target, WithButton2Disabled {}
export interface WithButton3 extends WithButton3Format, WithButton3Label, WithButton3Target, WithButton3Disabled {}
export interface WithButtons extends WithButton, WithButton2, WithButton3 {}
export interface WithChildren<T = children> {
    children?: T;
}
export interface WithCenter {
    center?: flag;
}
export interface WithChecked {
    checked?: flag;
}
export interface WithClassName {
    className?: class_name;
}
export interface WithClasses<T = string> {
    classes?: Record<string, T>;
}
export interface WithComponent<T = ComponentType<any>> {
    component?: T;
}
export interface WithContent<T = rich_text> {
    content?: T;
}
export interface WithCount {
    count?: number;
}
export interface WithDefaultValue<T = any> {
    defaultValue?: T;
}
export interface WithDescription<T = rich_text> {
    description?: T;
}
export interface WithDisabled {
    disabled?: flag;
}
export interface WithError<T = rich_text> {
    error?: T;
}
export interface WithErrors<T = any> {
    errors?: T;
}
export interface WithFooter<T = children> {
    footer?: T;
}
export interface WithHeader<T = children> {
    header?: T;
}
export interface WithHelper<T = rich_text> {
    helper?: T;
}
export interface WithHoverable {
    hoverable?: flag;
}
export interface WithId {
    id?: string;
}
export interface WithImage<T = image> {
    image?: T;
}
export interface WithIndex<T = number> {
    index?: T;
}
export interface WithInverted {
    inverted?: flag;
}
export interface WithItemPropsFn<T = any> {
    itemPropsFn?: (item: T, index: number) => Record<string, any>;
}
export interface WithItems<T = any> {
    items?: T[];
}
export interface WithKind {
    kind?: string;
}
export interface WithLabel<T = rich_text> {
    label?: T;
}
export interface WithLazy {
    lazy?: flag;
}
export interface WithLoading {
    loading?: flag;
}
export interface WithLocale {
    locale?: string;
}
export interface WithLogo<T = image> {
    logo?: T;
}
export interface WithMax {
    max?: number;
}
export interface WithMessage<T = rich_text> {
    message?: T;
}
export interface WithMin {
    min?: number;
}
export interface WithName<T = string> {
    name?: T;
}
export interface WithNativeOnChange<T = any> {
    onChange?: ChangeEventHandler<T>;
}
export interface WithNativeOnClick<T = any> {
    onClick?: MouseEventHandler<T>;
}
export interface WithNativeOnClickAsOnOpen<T = any> {
    onOpen?: MouseEventHandler<T>;
}
export interface WithNativeOnClickAsOnClose<T = any> {
    onClose?: MouseEventHandler<T>;
}
export interface WithNativeOnMouseEnter<T = any> {
    onMouseEnter?: MouseEventHandler<T>;
}
export interface WithNativeOnMouseLeave<T = any> {
    onMouseLeave?: MouseEventHandler<T>;
}
export interface WithNativeOnMouseOver<T = any> {
    onMouseOver?: MouseEventHandler<T>;
}
export interface WithNativePlaceholder {
    placeholder?: string;
}
export interface WithNoindex {
    noindex?: flag;
}
export interface WithNopadding {
    nopadding?: flag;
}
export interface WithOnChange<T = Function> {
    onChange?: T;
}
export interface WithOnClick<T = Function> {
    onClick?: T;
}
export interface WithOnClickAway {
    onClickAway?: (event: MouseEvent<Document>) => void;
}
export interface WithOnClose<T = Function> {
    onClose?: T;
}
export interface WithOnSubmit<T = Function> {
    onSubmit?: T;
}
export interface WithOpened {
    opened?: flag;
}

export interface WithActive {
    active?: flag;
}
export interface WithAlt {
    alt?: string;
}
export interface WithAutoFocus {
    autoFocus?: flag;
}
export interface WithBasic {
    basic?: flag;
}

export interface WithOverline<T = rich_text> {
    overline?: T;
}
export interface WithPlaceholder<T = rich_text> {
    placeholder?: T;
}
export interface WithQuantity {
    quantity?: number;
}
export interface WithRequired {
    required?: flag;
}
export interface WithRows {
    rows?: number;
}
export interface WithStatus<T = string> {
    status?: T;
}
export interface WithStyle<T = any> {
    style?: T;
}
export interface WithSubtext<T = rich_text> {
    subtext?: T;
}
export interface WithSubtitle<T = rich_text> {
    subtitle?: T;
}
export interface WithTarget<T = target> {
    target?: T;
}
export interface WithText<T = rich_text> {
    text?: T;
}
export interface WithTitle<T = rich_text> {
    title?: T;
}
export interface WithType<T = string> {
    type?: T;
}
export interface WithUrl<T = string> {
    url?: T;
}
export interface WithValue<T = any> {
    value?: T;
}

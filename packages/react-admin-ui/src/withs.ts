import {
    box_color,
    box_variant,
    class_name,
    children,
    image,
    shape,
    rich_text,
    icon,
    size,
    text_color,
    text_size,
    flag,
    target,
    dynamic_children,
    locale,
    text_component,
    chart_series,
    badge,
    level,
    block_variant,
    dropdown_item,
    menu_item,
    menu_variant,
    space_variant,
    text_variant,
} from './types';
import { padding } from './mappings/paddings';
import { alignment } from './mappings/alignments';
import { elevation } from './mappings/elevations';
import { corner } from './mappings/corners';
import { status } from './mappings/statuses';
import { hover_animation } from './mappings/hover-animations';
import { ComponentType, MouseEvent, ReactNode } from 'react';
import { avatar_size } from './mappings/avatar-sizes';
import { progress_variant } from './mappings/progress-variants';
import { rating_variant } from './mappings/rating-variants';
import { spinner_color, spinner_size, spinner_variant } from './mappings/spinners';
import { thumbnail_size } from './mappings/thumbnail-sizes';

export interface WithCenter {
    center?: flag;
}
export interface WithClassName {
    className?: class_name;
}
export interface WithButtons {
    buttons?: any[];
}
export interface WithCenter {
    center?: flag;
}
export interface WithVariantOfText {
    variant?: text_variant;
}
export interface WithVariantOfSpinner {
    variant?: spinner_variant;
}
export interface WithSizeOfSpinner {
    size?: spinner_size;
}
export interface WithColorOfSpinner {
    color?: spinner_color;
}
export interface WithVariantOfProgress {
    variant?: progress_variant;
}
export interface WithVariantOfSpace {
    variant?: space_variant;
}
export interface WithButtonLabel {
    btnLabel?: rich_text;
}
export interface WithButtonTarget {
    btnTarget?: target;
}
export interface WithButtonColor {
    btnColor?: box_color;
}
export interface WithButtonIcon {
    btnIcon?: rich_text;
}
export interface WithButtonEndIcon {
    btnEndIcon?: rich_text;
}
export interface WithHoverable {
    hoverable?: flag;
}
export interface WithColorOfBox {
    color?: box_color;
}
export interface WithItemsOfMenu {
    items?: menu_item[];
}
export interface WithVariantOfMenu {
    variant?: menu_variant;
}
export interface WithBadge {
    badge?: badge;
}
export interface WithOnSubmit {
    onSubmit?: Function;
}
export interface WithLocales {
    locales?: locale[];
}
export interface WithVariantOfBox {
    variant?: box_variant;
}
export interface WithVertical {
    vertical?: flag;
}
export interface WithBox extends WithColorOfBox, WithVariantOfBox {}
export interface WithSeries {
    series?: chart_series;
}
export interface WithItemsOfDropdown {
    items?: dropdown_item[];
}
export interface WithLabels {
    labels?: string[];
}
export interface WithChildren {
    children?: children;
}
export interface WithHeader {
    header?: ReactNode;
}
export interface WithFooter {
    footer?: ReactNode;
}
export interface WithSubmitting {
    submitting?: flag;
}
export interface WithDynamicChildren {
    children?: dynamic_children;
}
export interface WithName {
    name?: string;
}
export interface WithImage {
    image?: image;
}
export interface WithQuantity {
    quantity?: number;
}
export interface WithShape {
    shape?: shape;
}
export interface WithText {
    text?: rich_text;
}
export interface WithPadding {
    padding?: padding;
}
export interface WithVariantOfBlock {
    variant?: block_variant;
}
export interface WithVariantOfRating {
    variant?: rating_variant;
}
export interface WithElevation {
    elevation?: elevation;
}
export interface WithContent {
    content?: rich_text;
}
export interface WithTitle {
    title?: rich_text;
}
export interface WithSizeOfAvatar {
    size?: avatar_size;
}
export interface WithSubtitle {
    subtitle?: rich_text;
}
export interface WithDescription {
    description?: rich_text;
}
export interface WithIcon {
    icon?: icon;
    iconSize?: text_size;
}
export interface WithEndIcon {
    endIcon?: icon;
    endIconSize?: text_size;
}
export interface WithSize {
    size?: size;
}
export interface WithConfirm {
    confirm?: boolean;
    confirmTitle?: rich_text;
    confirmText?: rich_text;
    confirmKind?: string;
    confirmDanger?: flag;
}
export interface WithLevel {
    level?: level;
}
export interface WithDisabled {
    disabled?: flag;
}
export interface WithError {
    error?: rich_text;
}
export interface WithOptions {
    options?: { [key: string]: any };
}
export interface WithOnChange {
    onChange?: Function;
}
export interface WithKind {
    kind?: string;
}
export interface WithLoading {
    loading?: flag;
}
export interface WithMessage {
    message?: rich_text;
}
export interface WithHelper {
    helper?: rich_text;
}
export interface WithLabel {
    label?: rich_text;
}
export interface WithActive {
    active?: flag;
}
export interface WithOnToggle {
    onToggle?: Function;
}
export interface WithTarget {
    target?: target;
}
export interface WithBadges {
    badges?: badge[];
}
export interface WithTextColor {
    color?: text_color;
}
export interface WithTextComponent {
    component?: text_component;
}
export interface WithTextSize {
    size?: text_size;
}
export interface WithPosition {
    position?: alignment;
}
export interface WithLogo {
    logo?: image;
}
export interface WithSizeOfThumbnail {
    size?: thumbnail_size;
}
export interface WithCorner {
    corner?: corner;
}
export interface WithDefaultValues {
    defaultValues?: { [key: string]: any };
}
export interface WithOnSubmit {
    onSubmit?: Function;
}
export interface WithOnNext {
    onNext?: Function;
}
export interface WithOnPrevious {
    onPrevious?: Function;
}
export interface WithOnCancel {
    onCancel?: Function;
}
export interface WithOnComplete {
    onComplete?: Function;
}
export interface WithOnSave {
    onSave?: Function;
}
export interface WithOnNext {
    onNext?: Function;
}
export interface WithWidth {
    width?: number;
}
export interface WithHeight {
    height?: number;
}
export interface WithOnChange {
    onChange?: Function;
}
export interface WithOnClear {
    onClear?: Function;
}
export interface WithOnClick {
    onClick?: target;
}
export interface WithIndex {
    index?: number;
}
export interface WithOnClickAway {
    onClickAway?: (event: MouseEvent<Document>) => void;
}
export interface WithStyle {
    style?: any;
}
export interface WithClosable {
    closable?: flag;
}
export interface WithOverline {
    overline?: rich_text;
}
export interface WithStatusOfBuddy {
    status?: status;
}
export interface WithHoverAnimation {
    hoverAnimation?: hover_animation;
}
export interface WithAutoFocus {
    autoFocus?: flag;
}
export interface WithCount {
    count?: number;
}
export interface WithAny {
    [key: string]: any;
}
export interface WithItems {
    items?: any[];
}
export interface WithComponent {
    component?: ComponentType<any>;
}
export interface WithQueryName {
    queryName?: string;
}
export interface WithMutationName {
    mutationName?: string;
}
export interface WithId {
    id?: string;
}
export interface WithOnSuccess {
    onSuccess?: Function;
}
export interface WithPrepare {
    prepare?: Function;
}
export interface WithDropdownItems {
    dropdownItems?: dropdown_item[];
}

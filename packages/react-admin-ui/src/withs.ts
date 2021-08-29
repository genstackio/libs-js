import {
    box_color,
    box_variant,
    class_name,
    children,
    image,
    shape,
    rich_text,
    slide,
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
    accordion_item,
    avatar_item,
    box_list_item,
    breadcrumb_item,
    action_item,
    choice_button_item,
    content_item_mosaic_item,
    corner_item,
    placement,
    faq_item,
    gallery_image,
    infos_item,
    list_item,
    menu_button_item,
    pricing_item,
    share_icon_item,
    summary_item,
    table_row,
    table_column,
    timeline_item,
    screen_header_item,
    register,
    form_item,
    news_item,
    tab_item,
    select_item,
    rating_value,
    push_image_position,
    position,
    push_item,
    items_section_layouts,
    badge_variant,
    figures_chart_item,
} from './types';
import {
    padding,
    padding_x,
    padding_y,
    padding_top,
    padding_bottom,
    padding_left,
    padding_right,
} from './mappings/paddings';
import { margin, margin_x, margin_y, margin_top, margin_bottom, margin_left, margin_right } from './mappings/margins';
import { alignment } from './mappings/alignments';
import { elevation } from './mappings/elevations';
import { corner } from './mappings/corners';
import { status } from './mappings/statuses';
import { hover_animation } from './mappings/hover-animations';
import { ChangeEvent, ComponentType, MouseEvent, MouseEventHandler, ReactNode } from 'react';
import { avatar_size } from './mappings/avatar-sizes';
import { progress_variant } from './mappings/progress-variants';
import { rating_variant } from './mappings/rating-variants';
import { spinner_color, spinner_size, spinner_variant } from './mappings/spinners';
import { thumbnail_size } from './mappings/thumbnail-sizes';
import { image_size } from './mappings/image-sizes';
import { box_size } from './mappings/box-sizes';
import { field_variant } from './mappings/field-variants';
import { label_placement } from './mappings/label-placements';
import { heading_text_variant } from './mappings/heading-text-variants';
import { border, border_bottom, border_left, border_right, border_top, border_x, border_y } from './mappings/borders';
import { accordion_corner } from './mappings/accordion-corners';

export interface WithCenter {
    center?: flag;
}
export interface WithClassName {
    className?: class_name;
}

// WithContent
export interface WithContent {
    content?: rich_text;
}

// WithTitle
export interface WithTitle {
    title?: rich_text;
}
export interface WithTitleAsString {
    title?: string;
}

// WithValue
export interface WithValue {
    value?: any;
}
export interface WithValueAsNumber {
    value?: number;
}
export interface WithValueAsRichText {
    value?: rich_text;
}

// WithDefaultValue
export interface WithDefaultValueAsBoolean {
    defaultValue?: flag;
}
export interface WithDefaultValueAsNumber {
    defaultValue?: number;
}
export interface WithDefaultValueAsString {
    defaultValue?: string;
}
export interface WithDefaultValue {
    defaultValue?: any;
}

// WithVariant
export interface WithVariantOfText {
    variant?: text_variant;
}
export interface WithVariantOfSpinner {
    variant?: spinner_variant;
}
export interface WithVariantOfProgress {
    variant?: progress_variant;
}
export interface WithVariantOfSpace {
    variant?: space_variant;
}
export interface WithVariantOfBox {
    variant?: box_variant;
}
export interface WithVariantOfMenu {
    variant?: menu_variant;
}
export interface WithVariantOfBlock {
    variant?: block_variant;
}
export interface WithVariantOfRating {
    variant?: rating_variant;
}
export interface WithVariantOfField {
    variant?: field_variant;
}
export interface WithVariantOfHeadingText {
    variant?: heading_text_variant;
}

export interface WithRows {
    rows?: number;
}

// WithValues
export interface WithValuesOfSelect {
    values?: select_item[];
}
export interface WithValuesOfRating {
    values?: rating_value[];
}

// WithSize
export interface WithSize {
    size?: size;
}
export interface WithSizeOfAvatar {
    size?: avatar_size;
}
export interface WithSizeOfBox {
    size?: box_size;
}
export interface WithSizeOfImage {
    size?: image_size;
}
export interface WithSizeOfThumbnail {
    size?: thumbnail_size;
}
export interface WithSizeOfSpinner {
    size?: spinner_size;
}
export interface WithSizeOfSpacer {
    size?: number;
    unitSize?: number;
}

export interface WithLocale {
    locale?: string;
}

// WithItems
export interface WithItems {
    items?: any[];
}
export interface WithItemsOfTimeline {
    items?: timeline_item[];
}
export interface WithItemsOfFiguresChart {
    items?: figures_chart_item[];
}
export interface WithItemsOfPush {
    items?: push_item[];
}
export interface WithItemsOfButtonItems {
    items?: any[];
}
export interface WithItemsOfTabs {
    items?: tab_item[];
}
export interface WithItemsOfNews {
    items?: news_item[];
}
export interface WithItemsOfTable {
    items?: table_row[];
}
export interface WithItemsOfPricing {
    items?: pricing_item[];
}
export interface WithItemsOfSummaries {
    items?: summary_item[];
}
export interface WithItemsOfShareIcons {
    items?: share_icon_item[];
}
export interface WithItemsOfMenu {
    items?: menu_item[];
}
export interface WithItemsOfInfos {
    items?: infos_item[];
}
export interface WithItemsOfGallery {
    items?: gallery_image[];
}
export interface WithItemsOfMenuButton {
    items?: menu_button_item[];
}
export interface WithItemsOfContentItemsMosaic {
    items?: content_item_mosaic_item[];
}
export interface WithItemsOfAction {
    items?: action_item[];
}
export interface WithItemsOfList {
    items?: list_item[];
}
export interface WithItemsOfDropdown {
    items?: dropdown_item[];
}
export interface WithItemsOfFaq {
    items?: faq_item[];
}
export interface WithItemsOfBreadcrumb {
    items?: breadcrumb_item[];
}
export interface WithItemsOfAccordion {
    items?: accordion_item[];
}
export interface WithItemsOfCorner {
    items?: corner_item[];
}
export interface WithItemsOfAvatar {
    items?: avatar_item[];
}
export interface WithItemsOfBoxList {
    items?: box_list_item[];
}
export interface WithItemsOfChoiceButton {
    items?: choice_button_item[];
}
export interface WithItemsOfScreenHeader {
    items?: screen_header_item[];
}
export interface WithItemsOfFormRow {
    items?: form_item[];
}

// WithColor
export interface WithColorOfBox {
    color?: box_color;
}
export interface WithColorOfSpinner {
    color?: spinner_color;
}

export interface WithPlacement {
    placement?: placement;
}
export interface WithLabelPlacement {
    labelPlacement?: label_placement;
}
export interface WithButtonLabel {
    btnLabel?: rich_text;
}
export interface WithButtonTarget {
    btnTarget?: target;
}
export interface WithButtonType {
    btnType?: string;
}
export interface WithButton2Label {
    btn2Label?: rich_text;
}
export interface WithButton2Target {
    btn2Target?: target;
}
export interface WithButton2Type {
    btn2Type?: string;
}
export interface WithButton3Label {
    btn3Label?: rich_text;
}
export interface WithButton3Target {
    btn3Target?: target;
}
export interface WithButton3Type {
    btn3Type?: string;
}
export interface WithButtonColor {
    btnColor?: box_color;
}
export interface WithButton2Color {
    btn2Color?: box_color;
}
export interface WithButton3Color {
    btn3Color?: box_color;
}
export interface WithButtonSize {
    btnSize?: size;
}
export interface WithButton2Size {
    btn2Size?: size;
}
export interface WithButton3Size {
    btn3Size?: size;
}
export interface WithButtonCorner {
    btnCorner?: corner;
}
export interface WithButton2Corner {
    btn2Corner?: corner;
}
export interface WithButton3Corner {
    btn3Corner?: corner;
}
export interface WithButtonIcon {
    btnIcon?: rich_text;
}
export interface WithButton2Icon {
    btn2Icon?: rich_text;
}
export interface WithButton3Icon {
    btn3Icon?: rich_text;
}
export interface WithButtonEndIcon {
    btnEndIcon?: rich_text;
}
export interface WithButton2EndIcon {
    btn2EndIcon?: rich_text;
}
export interface WithButton3EndIcon {
    btn3EndIcon?: rich_text;
}
export interface WithButtonClassName {
    btnClassName?: class_name;
}
export interface WithButton2ClassName {
    btn2ClassName?: class_name;
}
export interface WithButton3ClassName {
    btn3ClassName?: class_name;
}
export interface WithHoverable {
    hoverable?: flag;
}
export interface WithColumnsOfTable {
    columns?: table_column[];
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
export interface WithVertical {
    vertical?: flag;
}
export interface WithExpandIcon {
    expandIcon?: icon;
}

export interface WithBox extends WithColorOfBox, WithVariantOfBox {}
export interface WithSeries {
    series?: chart_series;
}
export interface WithLabels {
    labels?: string[];
}
export interface WithChildren {
    children?: children;
}
export interface WithItem {
    item?: any;
}
export interface WithUser {
    user?: any;
}
export interface WithOnLogout {
    onLogout?: Function;
}
export interface WithOnSearch {
    onSearch?: Function;
}
export interface WithHeader {
    header?: ReactNode;
}
export interface WithFooter {
    footer?: ReactNode;
}
export interface WithErrors {
    errors?: any;
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
export interface WithMin {
    min?: number;
}
export interface WithMax {
    max?: number;
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
export interface WithTypeOfBadge {
    type?: badge_variant;
}
export interface WithPadding {
    p?: padding;
    px?: padding_x;
    py?: padding_y;
    pt?: padding_top;
    pb?: padding_bottom;
    pl?: padding_left;
    pr?: padding_right;
}
export interface WithElevation {
    elevation?: elevation;
}
export interface WithContent {
    content?: rich_text;
}
export interface WithPlaceholder {
    placeholder?: rich_text;
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
export interface WithActiveIcon {
    activeIcon?: icon;
    activeIconSize?: text_size;
}
export interface WithEndIcon {
    endIcon?: icon;
    endIconSize?: text_size;
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
export interface WithRegister {
    register?: register;
}
export interface WithRequired {
    required?: flag;
}
export interface WithField {
    field?: flag;
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
export interface WithOpened {
    opened?: flag;
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
export interface WithColorOfText {
    color?: text_color;
}
export interface WithComponentOfText {
    component?: text_component;
}
export interface WithSizeOfText {
    size?: text_size;
}
export interface WithPosition {
    position?: position;
}
export interface WithAlignmentAsPosition {
    position?: alignment;
}
export interface WithLogo {
    logo?: image;
}
export interface WithPlayingIcon {
    playingIcon?: icon;
}
export interface WithCorner {
    corner?: corner;
}
export interface WithCornerOfAccordion {
    corner?: accordion_corner;
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
export interface WithOnConfirm {
    onConfirm?: Function;
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
export interface WithNativeOnClick {
    onClick?: MouseEventHandler;
}
export interface WithNativeOnChange {
    onChange?: (event: ChangeEvent<any>, expanded: boolean) => void;
}
export interface WithNativeOnMouseOver {
    onMouseOver?: MouseEventHandler;
}
export interface WithNativeOnMouseLeave {
    onMouseLeave?: MouseEventHandler;
}
export interface WithNativeOnMouseEnter {
    onMouseEnter?: MouseEventHandler;
}
export interface WithSlide {
    slide: slide;
}
export interface WithSlides {
    slides?: slide[];
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
export interface WithClosable extends WithOnClose {
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
export interface WithOnClose {
    onClose?: Function;
}
export interface WithPrepare {
    prepare?: Function;
}
export interface WithSpinnerComponent {
    spinnerComponent?: ComponentType<any>;
}
export interface WithDropdownItems {
    dropdownItems?: dropdown_item[];
}
export interface WithButton
    extends WithButtonType,
        WithButtonTarget,
        WithButtonColor,
        WithButtonLabel,
        WithButtonIcon,
        WithButtonClassName,
        WithButtonSize,
        WithButtonCorner,
        WithButtonEndIcon {}
export interface WithButton2
    extends WithButton2Type,
        WithButton2Target,
        WithButton2Color,
        WithButton2Label,
        WithButton2Icon,
        WithButton2ClassName,
        WithButton2Size,
        WithButton2Corner,
        WithButton2EndIcon {}
export interface WithButton3
    extends WithButton3Type,
        WithButton3Target,
        WithButton3Color,
        WithButton3Label,
        WithButton3Icon,
        WithButton3ClassName,
        WithButton3Size,
        WithButton3Corner,
        WithButton3EndIcon {}

export interface WithButtons extends WithButton, WithButton2, WithButton3 {}

export interface WithHeadingText extends WithTitle, WithSubtitle, WithDescription, WithCenter {}
export interface WithFullText extends WithHeadingText, WithContent {}

export interface WithMargin {
    m?: margin;
    mx?: margin_x;
    my?: margin_y;
    mt?: margin_top;
    mb?: margin_bottom;
    ml?: margin_left;
    mr?: margin_right;
}

export interface WithBorder {
    b?: border;
    bx?: border_x;
    by?: border_y;
    bt?: border_top;
    bb?: border_bottom;
    bl?: border_left;
    br?: border_right;
}

export interface WithPositionOfPushImage {
    imagePosition?: push_image_position;
}

export interface WithPositionOfButtons {
    buttonsPosition?: position;
}

export interface WithPosition {
    buttonsPosition?: position;
}

export interface WithPush
    extends WithHeadingText,
        WithImage,
        WithButton,
        WithButton2,
        WithButton3,
        WithPositionOfButtons,
        WithPositionOfPushImage {}

export interface WithLayoutOfItemsSection {
    layout?: items_section_layouts;
}

export interface WithMaxLen {
    maxLen?: number;
}

export interface WithEllipsis {
    ellipsis?: rich_text;
}

export interface WithUpper {
    upper?: flag;
}

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
} from './types';
import { padding } from './mappings/paddings';
import { alignment } from './mappings/alignments';
import { elevation } from './mappings/elevations';
import { corner } from './mappings/corners';
import { status } from './mappings/statuses';
import { hover_animation } from './mappings/hover-animations';

export interface WithCenter {
    center?: flag;
}
export interface WithClassName {
    className?: class_name;
}
export interface WithHoverable {
    hoverable?: flag;
}
export interface WithBoxColor {
    color?: box_color;
}
export interface WithBoxVariant {
    variant?: box_variant;
}
export interface WithVertical {
    vertical?: flag;
}
export interface WithBox extends WithBoxColor, WithBoxVariant {}
export interface WithChildren {
    children?: children;
}
export interface WithDynamicChildren {
    children?: dynamic_children;
}
export interface WithName {
    name: string;
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
export interface WithElevation {
    elevation?: elevation;
}
export interface WithContent {
    content?: rich_text;
}
export interface WithTitle {
    title?: rich_text;
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
export interface WithDisabled {
    disabled?: flag;
}
export interface WithError {
    error?: rich_text;
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
export interface WithTarget {
    target?: target;
}
export interface WithTextColor {
    color?: text_color;
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
export interface WithCorner {
    corner?: corner;
}
export interface WithDefaultValues {
    defaultValues?: any;
}
export interface WithOnSubmit {
    onSubmit?: Function;
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
export interface WithClosable {
    closable?: flag;
}
export interface WithOverline {
    overline?: rich_text;
}
export interface WithBuddyStatus {
    status?: status;
}
export interface WithHoverAnimation {
    hoverAnimation?: hover_animation;
}

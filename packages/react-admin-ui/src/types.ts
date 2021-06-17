import {ReactNode} from "react";
import {shape} from './mappings/shapes';
import {status} from './mappings/statuses';
import {box_color} from './mappings/box-colors';
import {box_variant} from './mappings/box-variants';

export {corner} from './mappings/corners';
export {alignment} from './mappings/alignments';
export {padding} from './mappings/paddings';
export {status} from './mappings/statuses';
export {shape} from './mappings/shapes';
export {text_color} from './mappings/text-colors';
export {text_variant} from './mappings/text-variants';
export {box_color} from './mappings/box-colors';
export {box_variant} from './mappings/box-variants';

export type badge = {variant?: box_variant, color?: box_color, text?: string, type?: badge_variant, label?: string};
export type badge_variant = 'tag' | 'pill' | 'none';
export type basic_size = 'sm' | 'md' | 'lg';
export type accordion_variant = box_variant | 'light' ;
export type icon_variant = 'settings' | 'query_builder' | 'notifications_none_icon' | 'none';
export type progress_variant = 'linear' | 'circular';
export type image = {url: string, alt: string};
export type gallery_image = image;
export type level = 1 | 2 | 3 | 4 | 5 | 6;
export type pill = {text?: string, color?: box_color, variant?: box_variant};
export type ribbon_position = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
export type size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type tag = {text?: string, color?: box_color, variant?: box_variant, icon?: icon};
export type target = Function | string;
export type variant = string;
export type color = string;
export type classes = {[key: string]: string};
export type class_name = string;
export type children = ReactNode;
export type rich_text = ReactNode;
export type dropdown_item = {name?: string};
export type item = {badge?: badge, content?: rich_text | string[], icon?: icon, title?: rich_text};
export type menu_item = item;
export type spinner_variant = 'dots' | 'dotted-circle' | 'full-circle' | 'half-circle' | 'separate-circle' | 'squares';
export type accordion_item = item;
export type list_item = {badge?: badge, color?: box_color, text?: rich_text};
export type faq_item = accordion_item;
export type chart_serie = number[];
export type chart_series = chart_serie[];
export type avatar_item = {image?: image, name: string, shape?: shape, size?: size, status?: status};
export type breadcrumb_item = {label?: rich_text, target?: target};
export type news_item = {title?: rich_text, content?: rich_text};
export type tab_item = {title?: rich_text, content?: rich_text, disabled?: flag};
export type corner_item = {color?: box_color, icon?: icon, text?: rich_text, variant?: box_variant};
export type action_item = {color?: box_color, icon?: icon, label?: rich_text, target?: target, variant?: box_variant};
export type table_column = {id: string, format?: any, label?: string, width?: number};
export type table_row = any;
export type timeline_item = {color: box_color, description: rich_text, title: rich_text};
export type screen_header_item = {label?: rich_text, target?: target};
export type text_component = 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
export type icon = ReactNode;
export type flag = boolean;
export type pricing_item = {
    color?: box_color,
    currency?: string,
    features?: {
        title?: string
    }[],
    image?: image,
    label?: string,
    name: string,
    onClick: target,
    period: string,
    price: number,
    variant?: box_variant,
};
export type clsxm_params = {
    disablable?: flag,
    hoverable?: flag,
    variant?: variant,
    color?: color,
    disabled?: flag,
    styles?: {
        common?: any,
        nonDisabled?: any,
        hoverable?: any,
    },
}

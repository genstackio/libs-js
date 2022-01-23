// noinspection JSUnusedGlobalSymbols

import { ComponentType, ReactNode } from 'react';
import { shape } from './mappings/shapes';
import { status } from './mappings/statuses';
import { box_color } from './mappings/box-colors';
import { box_variant } from './mappings/box-variants';
import { text_size } from './mappings/text-sizes';
import { share_icon_type } from './mappings/share-icon-types';
import { ApexOptions } from 'apexcharts';
import {GridCellParams, GridColDef} from "@material-ui/data-grid";

export { corner } from './mappings/corners';
export { alignment } from './mappings/alignments';
export { padding } from './mappings/paddings';
export { margin } from './mappings/margins';
export { status } from './mappings/statuses';
export { shape } from './mappings/shapes';
export { text_color } from './mappings/text-colors';
export { text_variant } from './mappings/text-variants';
export { box_color } from './mappings/box-colors';
export { box_variant } from './mappings/box-variants';
export { block_variant } from './mappings/block-variants';
export { text_size } from './mappings/text-sizes';
export { share_icon_type } from './mappings/share-icon-types';

export type badge = { variant?: box_variant; color?: box_color; text?: string; type?: badge_variant; label?: string };
export type badge_variant = 'tag' | 'pill' | 'none';
export type basic_size = 'sm' | 'md' | 'lg';
export type menu_variant = box_variant | 'light';
export type icon_variant = 'settings' | 'query_builder' | 'notifications_none_icon' | 'none';
export type image = { url: string; alt: string };
export type gallery_image = image;
export type level = 1 | 2 | 3 | 4 | 5 | 6;
export type pill = { text?: string; color?: box_color; variant?: box_variant };
export type ribbon_position = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
export type size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type space_variant = 'horizontal' | 'vertical' | 'default';
export type tag = { text?: string; color?: box_color; variant?: box_variant; icon?: icon };
export type target = string | Function;
export type variant = string;
export type color = string;
export type classes = { [key: string]: string };
export type class_name = string;
export type children = ReactNode;
export type dynamic_children = children | ((data?: any) => children);
export type rich_text = ReactNode;
export type dropdown_item = { name?: string };
export type choice_button_item = { label?: string; active?: flag; target?: target };
export type item = { badge?: badge; content?: rich_text | string[]; icon?: icon; title?: rich_text };
export type placement =
    | 'bottom-end'
    | 'bottom-start'
    | 'bottom'
    | 'left-end'
    | 'left-start'
    | 'left'
    | 'right-end'
    | 'right-start'
    | 'right'
    | 'top-end'
    | 'top-start'
    | 'top';
export type menu_item = {
    type?: 'section' | 'item' | 'menu';
    label: rich_text;
    description?: rich_text;
    target?: target;
    icon?: string;
    active?: flag;
    badges?: badge[];
    items?: menu_item[];
};
export type accordion_item = item;
export type infos_item = { label?: rich_text; value?: rich_text };
export type list_item = { badge?: badge; color?: box_color; text?: rich_text };
export type faq_item = accordion_item;
export type chart_serie = number[];
export type chart_series = chart_serie[];
export type avatar_item = { image?: image; name: string; shape?: shape; size?: size; status?: status };
export type summary_item = { color: box_color; unit?: string; value?: string; percentage: number; icon?: icon };
export type breadcrumb_item = breadcrumb_item_adhoc | breadcrumb_item_function;
export type breadcrumb_item_adhoc = { label?: rich_text; target?: target };
export type breadcrumb_item_function = (item: any) => ({ label?: rich_text; target?: target });
export type list_column = Partial<GridColDef> & {
    id: string;
    label?: rich_text;
    render?: Function;
    format?: Function;
    width?: number;
    [key: string]: any;
};
export type list_action = string | any;
export type list_global_action = string | any;
export type list = { columns?: list_column[]; actions?: list_action[]; globalActions?: list_global_action[] };
export type select_item = { value?: string; label?: rich_text };
export type news_item = { title?: rich_text; description?: rich_text };
export type tab_item = {
    title?: rich_text;
    content?: rich_text;
    disabled?: flag;
    component?: ComponentType<any>;
    props?: any;
};
export type corner_item = { color?: box_color; icon?: icon; text?: rich_text; variant?: box_variant };
export type action_item = {
    color?: box_color;
    icon?: icon;
    label?: rich_text;
    target?: target;
    variant?: box_variant;
    disabled?: flag;
};
export type table_column = Partial<GridColDef> & { id: string; format?: any; label?: string; width?: number; render?: Function; };
export type table_row = any;
export type timeline_item = { color: box_color; description: rich_text; title: rich_text };
export type screen_header_item = { label?: rich_text; target?: target };
export type text_component = 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
export type icon = ReactNode;
export type register = ((name: string, options?: any) => any) | any;
export type control = Function | any;
export type flag = boolean;
export type pricing_item_feature = { title?: rich_text };
export type pricing_item = {
    color?: box_color;
    currency?: string;
    features?: pricing_item_feature[];
    image?: image;
    label?: string;
    name: string;
    onClick: target;
    period: string;
    price: number;
    variant?: box_variant;
};
export type clsxm_params = {
    disablable?: flag;
    hoverable?: flag;
    variant?: variant;
    color?: color;
    size?: text_size;
    disabled?: flag;
    styles?: {
        common?: any;
        nonDisabled?: any;
        hoverable?: any;
    };
};
export type locale = { value: string; language: rich_text };
export type menu_button_item = { icon?: icon; label?: rich_text; target?: target };
export type rating_value = { value: string | number; label?: string };

export type action_preexecute_callback = (order: any) => Promise<any>;
export type action_postexecute_callback = (result: any) => Promise<any>;
export type action_prepare_callback = (data: any) => Promise<any>;
export type action_notify_callback = (result: any) => Promise<void>;
export type action_convert_callback = (result: any) => Promise<any>;
export type action_onsuccess_callback = (result: any) => Promise<void>;
export type action_processerror_callback = (
    error: any,
    context: { name: string; t: Function; values: any; options: any },
) => Promise<void>;
export type action_converterror_callback = (error: any, context: { name: string; t: Function; options: any }) => any;
export type action_formaterror_callback = (error: any) => any;
export type workflow_step = {
    id: string;
    label: rich_text;
    description: rich_text;
    bgImage?: image;
    image?: image;
    isDisabled?: Function;
    component?: ComponentType;
};
export type workflow_config = {
    currentStep: workflow_step;
    steps: workflow_step[];
    getPreviousStepId: () => string;
    getNextStepId: () => string;
    isLast: () => boolean;
    isFirst: () => boolean;
};

export type wizard_step_props = {
    onNext?: Function;
    onPrevious?: Function;
    onCancel?: Function;
    onComplete?: Function;
    onSave?: Function;
    onSubmit?: Function;
    defaultValues?: { [key: string]: any };
};

export type wizard_step = {
    id: string;
    label: rich_text;
    description: rich_text;
    bgImage?: image;
    image?: image;
    isDisabled?: Function;
    component?: ComponentType<wizard_step_props>;
};

export type share_icon_item = { type: share_icon_type; target?: target };

export type form_item = {
    type: 'field' | 'row' | 'buttonSubmit';
    field?: string;
    required?: boolean;
    autofocus?: boolean;
    items?: form_item;
};

export type confirmable_options = {
    confirm?: flag;
    confirmTitle?: rich_text;
    confirmText?: rich_text;
    confirmDanger?: flag;
    confirmKind?: string;
    onConfirm?: Function;
    onCancel?: Function;
};

export type content_item_mosaic_item = {
    className?: class_name;
    image?: image;
    text?: rich_text;
    title?: rich_text;
    target?: target;
};

export type box_list_item = { label?: rich_text; target?: target };
export type slide = { image: image };

export type user_role = {
    value: string;
    label: string;
};

export type push_image_position = 'left' | 'right' | 'top' | 'bottom';

export type position = 'left' | 'right' | 'top' | 'bottom';

export type push_item = {
    btnLabel?: rich_text;
    btnTarget?: target;
};

export type visual_bullet_block_item = {
    icon?: icon;
    title?: rich_text;
    subtitle?: rich_text;
};

export type items_section_layouts =
    | 'basic'
    | 'large'
    | 'small'
    | 'framed'
    | 'summary'
    | 'vertical-summary'
    | 'large-summary'
    | 'rounded-large-summary';

export type figures_chart_item = {
    color?: box_color;
    name?: string;
    options?: ApexOptions;
    series?: chart_series;
    value?: number;
};

export type preset = {
    get: (key: string, defaultValues?: any) => any;
    set: (key: string, value: any) => preset;
    override: (key: string, value: any) => preset;
    overrides: (overrides: { [key: string]: any }) => preset;
    classes: (key: string, v: any, e?: any, d?: string) => string | undefined;
    pclasses: (key: string, keys?: string[]) => (params: clsxm_params, keys?: string[] | undefined) => string | undefined;
    xclasses: <T = any, U = string | undefined>(key: string) => (v: T | undefined, e?: any) => U;
    xvalues: <T = any, U = any>(key: string) => (v: T | undefined, e?: any) => U;
    values: (key: string) => string[];
    combine: (...args: ((clsxm_params) => string | undefined)[]) => (clsxm_params) => string | undefined;
    customCombine: (parametrize: (clsxm_params) => clsxm_params, ...args: ((clsxm_params) => string | undefined)[]) => (clsxm_params) => string | undefined;
    load: (config: any) => preset;
};

export type table_column_formatter = (v: any, params: GridCellParams) => any;
export type table_column_renderer = ((col: any) => (params: GridCellParams) => any) | ((col: any) => undefined);

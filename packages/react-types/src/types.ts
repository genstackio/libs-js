import { ReactNode } from 'react';

export * from '@genstackio/types/lib/types';

export type rich_text = ReactNode;

export type effect = {
    id?: string;
    type?: string;
};

export type background = {
    id?: string;
    type?: string;
    value?: any;
};

export type styling_shape = {
    blockShapeClass?: string;
    blockHeaderShapeClass?: string;
    blockFooterShapeClass?: string;
    itemShapeClass?: string;
    logoShapeClass?: string;
};
export type styling_padding = {
    blockHeaderPaddingClass?: string;
    blockContentPaddingClass?: string;
};
export type styling_border = {
    blockHeaderBorderClass?: string;
    blockFooterBorderClass?: string;
    blockContentOpenedBorderClass?: string;
    blockBorderClass?: string;
    itemBorderClass?: string;
};
export type styling_border_color = {
    blockBorderColorClass?: string;
    itemBorderColorClass?: string;
};
export type styling_text_color = {
    titleTextColorClass?: string;
    invertedTitleTextColorClass?: string;
};
export type styling_background = {
    invertedBlockHeaderBackgroundClass?: string;
    blockHeaderBackgroundClass?: string;
    blockBackgroundClass?: string;
};
export type styling_text_size = {
    blockHeaderTextSizeClass?: string;
    blockContentTextSizeClass?: string;
};
export type styling_thumbnail0_size = {
    thumbnail0SizeClass?: string;
};
export type styling_banner_size = {
    bannerSizeClass?: string;
};
export type styling_banner_color = {
    bannerColorClass?: string;
};
export type styling_logo_size = {
    logoSizeClass?: string;
};

export type styling_settings = {
    shapes: Record<string, styling_shape>;
    paddings: Record<string, styling_padding>;
    borders: Record<string, styling_border>;
    borderColors: Record<string, styling_border_color>;
    textColors: Record<string, styling_text_color>;
    backgrounds: Record<string, styling_background>;
    textSizes: Record<string, styling_text_size>;
    thumbnail0Sizes: Record<string, styling_thumbnail0_size>;
    bannerSizes: Record<string, styling_banner_size>;
    bannerColors: Record<string, styling_banner_color>;
    logoSizes: Record<string, styling_logo_size>;
};

export type styling_context_value = styling_shape &
    styling_padding &
    styling_border &
    styling_border_color &
    styling_text_color &
    styling_background &
    styling_text_size &
    styling_thumbnail0_size &
    styling_banner_size &
    styling_banner_color &
    styling_logo_size;

export type styling_context_value_short = {
    borderShape?: string;
    padding?: string;
    border?: string;
    borderColor?: string;
    textColor?: string;
    background?: string;
    textSize?: string;
    thumbnail0Size?: string;
    bannerSize?: string;
    bannerColor?: string;
    logoSize?: string;
};

export type children = ReactNode;

export type dynamic_page_config = Record<string, any>;
export type dynamic_page_body_item_config = Record<string, any>;
export type dynamic_page_head_meta = {
    type: string;
    name: string;
    value?: string;
};

export type module_context_value = {
    index: number;
    last: boolean;
    first: boolean;
    middle: boolean;
    type: string;
    total: number;
    containerProps?: any;
    blockProps?: any;
    paddingMode?: 'all' | 'left' | 'right' | 'none';
};

export type public_page_definition = any;

export type ModuleProps = {
    className?: string;
    type?: string;
    config?: dynamic_page_body_item_config;
    nopadding?: boolean;
    index?: any;
};

export type TypeModuleProps = ModuleProps & {
    typeType: string;
    doc: any;
};

export type CommonModuleProps = ModuleProps;

export type TypeProps = {
    type: string;
    doc: any;
};

export type dynamic_page_context = {
    doc?: object;
    [key: string]: any;
};

export type workflow_settings = {
    [key: string]: any;
};

export type workflow_step_cases = {
    cases: Record<string, workflow_step>;
};
export type next_fn = (vars: { doc?: any; extraVars?: any; url?: string; query?: any }) => {
    doc?: any;
    extraVars?: any;
    url?: string;
    query?: any;
};

export type workflow_step = {
    id: string;
    name: string;
    url?: string;
    next?: string | Record<string, string>;
    nextFn?: next_fn;

    nextSsr?: boolean;
    ssr?: boolean;
    redirect?: string;
    if?: (settings: workflow_settings) => boolean;
};

export type workflow = {
    id: string;
    steps: Record<string, Omit<workflow_step, 'id' | 'name'>>;
};

export type workflows = Record<string, Omit<workflow, 'id'>>;

export type content_components_context_value = Record<string, any>;

export type module_definition = {
    id: string;
    type: string;
    config?: any;
    containerProps?: any;
    blockProps?: any;
};

export type group_definition = {
    type: string;
    id?: string;
    items?: module_definition[];
};

export type group_zones = Record<string, group_definition[]>;

export type zone_fn = (group: string, state: group_zones) => string;

export type zone_map = Record<string, string>;

export type def_keys_builder = (doc: any) => string[];

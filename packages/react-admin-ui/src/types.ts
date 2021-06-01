export type box_color = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';
export type box_variant = 'filled' | 'outlined' | 'contained' | 'none';
export type badge_variant = 'tag' | 'pill' | 'none';
export type icon_variant = 'settings' | 'query_builder' | 'notifications_none_icon' | 'none';
export type image = {url: string, alt: string};
export type badge = {variant?: box_variant, color?: box_color, text?: string, type?: badge_variant, label?: string};
export type pill = {text?: string, color?: box_color, variant?: box_variant};
export type tag = {text?: string, color?: box_color, variant?: box_variant, icon?: string}
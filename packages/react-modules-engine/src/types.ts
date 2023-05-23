import { group_definition, children, flag } from '@genstackio/react-types';
import { WithAny, WithZoneCustomization } from './withs';

export * from '@genstackio/react-types/lib/types';

export type group_children = (g: group_definition, index: number) => children;

export type zone_customization_at_least_props = WithZoneCustomization & WithAny;

export type designer_context_value = {
    debug: flag;
};
export type module_layouts_context_value = Record<string, any>;
export type module_aliases_context_value = Record<string, any>;
export type module_groups_context_value = Record<string, any>;
export type module_debug_panels_context_value = Record<string, any>;
export type module_modal_component_context_value = any | undefined;
export type templates_context_value = Record<string, Record<string, string | Record<string, any>>>;

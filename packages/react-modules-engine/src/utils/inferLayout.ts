import { group_definition } from '../types';

// noinspection JSUnusedLocalSymbols
export function inferLayout(gs: Record<string, group_definition>, groups: group_definition[], defaultValue: string) {
    if (gs['main'] && gs['aside_left']) return 'two_column_left';
    if (gs['main'] && gs['aside_right']) return 'two_column_right';
    return defaultValue;
}

export default inferLayout;

import { styling_context_value_short } from '../types';
import settings from '../settings';
import defaults from '../defaults';

const defaultValue = {};

export function v(styling: styling_context_value_short, k: string, kk: string) {
    return settings[k][styling[kk] || ''] || settings[k][defaults[kk]] || defaultValue;
}

export default v;

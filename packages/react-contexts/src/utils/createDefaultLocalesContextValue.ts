import {locales_context_value} from '../types';

export const createDefaultLocalesContextValue = (defaultValue: locales_context_value|undefined = undefined): locales_context_value => defaultValue || {locales: [], default: undefined, fallback: undefined};

export default createDefaultLocalesContextValue

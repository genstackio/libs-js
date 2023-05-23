import { styling_context_value } from '../types';
import buildStyling from './buildStyling';

export function createDefaultStylingContextValue(): styling_context_value {
    return buildStyling({});
}

export default createDefaultStylingContextValue;

import { styling_context_value, styling_context_value_short } from '../types';
import v from './v';

const items = {
    shapes: 'borderShape',
    paddings: 'padding',
    borders: 'border',
    borderColors: 'borderColor',
    textColors: 'textColor',
    backgrounds: 'background',
    textSizes: 'textSize',
    thumbnail0Sizes: 'thumbnail0Size',
    bannerSizes: 'bannerSize',
    bannerColors: 'bannerColor',
    logoSizes: 'logoSize',
};

export function buildStyling(styling: styling_context_value_short): styling_context_value {
    return Object.entries(items).reduce(
        (acc, [k, kk]) => Object.assign(acc, v(styling, k, kk)),
        {} as any,
    ) as styling_context_value;
}

export default buildStyling;

import clsx from 'clsx';
import textColorClass, { text_color } from '../mappings/text-colors';
import textVariantClass from '../mappings/text-variants';
import { box_context_value } from '@genstackio/react-contexts/lib/types';
import useBox from '@genstackio/react-contexts/lib/hooks/useBox';
import { WithCenter, WithText, WithColorOfText, WithComponentOfText, WithVariantOfText } from '../withs';
import { AsComponent } from '../as';
import { flag, rich_text } from '../types';

const mappings = {
    // contained
    'contained-primary': 'light',
    'contained-secondary': 'light',
    'contained-success': 'light',
    'contained-info': 'light',
    'contained-warning': 'light',
    'contained-danger': 'light',
    'contained-disabled': 'dark',
    'contained-light': 'dark',
    'contained-dark': 'light',
    'contained-default': 'dark',
    // outlined
    'outlined-primary': 'primary',
    'outlined-secondary': 'secondary',
    'outlined-success': 'success',
    'outlined-info': 'info',
    'outlined-warning': 'warning',
    'outlined-danger': 'danger',
    'outlined-disabled': 'disabled',
    'outlined-light': 'light',
    'outlined-dark': 'dark',
    'outlined-default': 'dark',
    // filled
    'filled-primary': 'primary',
    'filled-secondary': 'secondary',
    'filled-success': 'success',
    'filled-info': 'info',
    'filled-warning': 'warning',
    'filled-danger': 'danger',
    'filled-disabled': 'disabled',
    'filled-light': 'light',
    'filled-dark': 'dark',
    'filled-default': 'dark',
    // light
    'light-primary': 'primary',
    'light-secondary': 'secondary',
    'light-success': 'success',
    'light-info': 'info',
    'light-warning': 'warning',
    'light-danger': 'danger',
    'light-disabled': 'disabled',
    'light-light': 'light',
    'light-dark': 'dark',
    'light-default': 'dark',

    'default-default': 'dark',
};

function computeTextColorFromBox(box: box_context_value, forcedColor: text_color | undefined = undefined) {
    if (forcedColor) return forcedColor;
    const k = [box.variant || 'default', box.color || 'default'].join('-');
    return mappings[k] || mappings['default-default'];
}

export function Text({
    className,
    center = false,
    color = undefined,
    text,
    variant = 'body',
    component = 'div',
    maxLen = -1,
    ellipsis = undefined,
    upper = false,
}: TextProps) {
    if (!text) return null;
    const box = useBox();
    const len = 'string' === typeof text ? text.length : undefined;
    const hasOverflow = 0 <= maxLen && (len || 0) > maxLen;
    const children = hasOverflow ? (
        <>
            {(text as string).slice(0, maxLen)}
            {ellipsis || ''}
        </>
    ) : (
        text
    );
    const props = {
        className: clsx(
            textColorClass(computeTextColorFromBox(box, color)),
            textVariantClass(variant),
            center && 'text-center',
            upper && 'uppercase',
            className,
        ),
        children,
    };
    switch (component) {
        case 'h1':
            return <h1 {...props} />;
        case 'h2':
            return <h2 {...props} />;
        case 'h3':
            return <h3 {...props} />;
        case 'h4':
            return <h4 {...props} />;
        case 'h5':
            return <h5 {...props} />;
        case 'h6':
            return <h6 {...props} />;
        case 'p':
            return <p {...props} />;
        case 'span':
            return <span {...props} />;
        default:
        case 'div':
            return <div {...props} />;
    }
}

export interface TextProps
    extends AsComponent,
        WithText,
        WithColorOfText,
        WithComponentOfText,
        WithVariantOfText,
        WithCenter {
    maxLen?: number;
    ellipsis?: rich_text;
    upper?: flag;
}

// noinspection JSUnusedGlobalSymbols
export default Text;

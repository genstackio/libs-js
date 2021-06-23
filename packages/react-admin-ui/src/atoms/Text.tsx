import clsx from 'clsx';
import { rich_text, text_component, class_name } from '../types';
import textColorClass, { text_color } from '../mappings/text-colors';
import textVariantClass, { text_variant } from '../mappings/text-variants';

export function Text({ className, color = 'inherit', text, variant = 'body', component = 'div' }: TextProps) {
    if (!text) return null;
    const props = {
        className: clsx(textColorClass(color), textVariantClass(variant), className),
        children: text,
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

export interface TextProps {
    className?: class_name;
    component?: text_component;
    color?: text_color;
    text?: rich_text;
    variant?: text_variant;
}

export default Text;

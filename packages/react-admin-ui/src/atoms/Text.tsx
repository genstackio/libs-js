import clsx from 'clsx';
import {text_variant, box_color_inherit, rich_text, text_component, class_name} from "../types";

const colors = {
    danger: 'text-danger',
    dark: 'text-dark',
    info: 'text-info',
    inherit: 'text-current',
    light: 'text-light',
    primary: 'text-primary',
    secondary: 'text-secondary',
    success: 'text-success',
    warning: 'text-warning',
}

const variants = {
    body: 'text-base font-body',
    cross: 'text-base line-through',
    description: 'text-sm font-description',
    subtitle:'text-lg font-light font-subtitle',
    title0: 'lg:text-9xl md:text-7xl sm:text-4xl font-bold font-title1',
    title1: 'text-6xl font-bold font-title1',
    title2: 'text-5xl font-bold font-title2',
    title3: 'text-4xl font-bold font-title3',
    title4: 'text-3xl font-bold font-title4',
    title5: 'text-2xl font-bold font-title5',
    title6: 'text-xl font-bold font-title6',
    title7: 'text-xxl xs:text-9xl font-bold font-title7 -mt-12 -mb-8 xs:m-0',
    underline: 'text-base underline font-underline',
}

export function Text({className, color = 'inherit', text, variant = 'body', component = 'div'}: TextProps) {
    if (!text) return null;
    const props = {
        className: clsx(colors[color], variants[variant], className),
        children: text,
    };
    switch (component) {
        case 'h1': return <h1 {...props} />;
        case 'h2': return <h2 {...props} />;
        case 'h3': return <h3 {...props} />;
        case 'h4': return <h4 {...props} />;
        case 'h5': return <h5 {...props} />;
        case 'h6': return <h6 {...props} />;
        case 'p': return <p {...props} />;
        case 'span': return <span {...props} />;
        default:
        case 'div': return <div {...props} />;
    }
}

export interface TextProps {
    className?: class_name,
    component?: text_component,
    color?: box_color_inherit,
    text?: rich_text,
    variant?: text_variant,
}

export default Text
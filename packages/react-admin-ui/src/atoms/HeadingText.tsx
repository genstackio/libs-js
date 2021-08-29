import { useMemo } from 'react';
import Text from './Text';
import Div, { DivProps } from './Div';
import headingTextVariantClass from '../mappings/heading-text-variants';
import { class_name, flag } from '../types';
import { WithColorOfText, WithHeadingText, WithVariantOfHeadingText } from '../withs';

export function HeadingText({
    color = undefined,
    contentClassName,
    description,
    descriptionClassName,
    headerClassName,
    subtitle,
    subtitleClassName,
    title,
    titleClassName,
    variant,
    ...props
}: HeadingTextProps) {
    const v = useMemo(() => headingTextVariantClass(variant), [variant]);

    if (!title && !subtitle && !description) return null;

    return (
        <Div {...props}>
            <Div className={headerClassName}>
                <Text color={color} text={title} variant={(v['title'] as any) || 'title'} className={titleClassName} />
                <Text
                    color={color}
                    mt={'_sm'}
                    text={subtitle}
                    variant={(v['subtitle'] as any) || 'subtitle'}
                    className={subtitleClassName}
                />
            </Div>
            <Div mt={'_sm'} className={contentClassName}>
                <Text
                    color={color}
                    text={description}
                    variant={v['description'] || 'description'}
                    className={descriptionClassName}
                />
            </Div>
        </Div>
    );
}

export interface HeadingTextProps
    extends Omit<DivProps, 'color' | 'variant'>,
        WithColorOfText,
        WithHeadingText,
        WithVariantOfHeadingText {
    full?: flag;
    titleClassName?: class_name;
    subtitleClassName?: class_name;
    descriptionClassName?: class_name;
    contentClassName?: class_name;
    headerClassName?: class_name;
}

// noinspection JSUnusedGlobalSymbols
export default HeadingText;

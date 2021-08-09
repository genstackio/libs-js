import { useMemo } from 'react';
import clsx from 'clsx';
import { WithColorOfText, WithHeadingText, WithVariantOfHeadingText } from '../withs';
import { AsComponent } from '../as';
import Text from './Text';
import Div from './Div';
import headingTextVariantClass from '../mappings/heading-text-variants';
import { class_name, flag } from '../types';

export function HeadingText({
    className,
    center = false,
    full = false,
    color = undefined,
    title,
    subtitle,
    description,
    variant,
    titleClassName,
    subtitleClassName,
    descriptionClassName,
    contentClassName,
    headerClassName,
}: HeadingTextProps) {
    const v = useMemo(() => headingTextVariantClass(variant), [variant]);
    return !!title || !!subtitle ? (
        <Div full={full} className={clsx(className, center ? 'text-center' : '')}>
            <Div className={headerClassName}>
                <Text text={title} color={color} variant={v['title'] as any || 'title'} className={titleClassName} />
                <Text
                    text={subtitle}
                    color={color}
                    variant={v['subtitle'] as any || 'subtitle'}
                    className={subtitleClassName}
                />
            </Div>
            <Div className={contentClassName}>
                <Text
                    text={description}
                    color={color}
                    variant={v['description'] || 'description'}
                    className={descriptionClassName}
                />
            </Div>
        </Div>
    ) : null;
}

export interface HeadingTextProps extends AsComponent, WithColorOfText, WithHeadingText, WithVariantOfHeadingText {
    full?: flag;
    titleClassName?: class_name;
    subtitleClassName?: class_name;
    descriptionClassName?: class_name;
    contentClassName?: class_name;
    headerClassName?: class_name;
}

// noinspection JSUnusedGlobalSymbols
export default HeadingText;

import clsx from 'clsx';
import Button from './Button';
import Dropdown from './Dropdown';
import boxClass from '../utils/boxClass';
import {box_color, box_variant, box_padding, icon, image, classes, class_name, rich_text, children, dropdown_item} from '../types';
import Container from './Container';
import Icon from "./Icon";
import Text from "./Text";

const paddings = {
    none: '',
    default: 'p-10',
    small: 'x-p-small',
}

const corners = {
    'rounded': 'rounded-2xl',
    'rounded-small': 'rounded-xl',
    'square': '',
};

const elevations = {
    '1': 'shadow-block',
    '2': 'shadow-upper-block',
}
export function Block({elevation = 1, corner = 'rounded', btnLabel, children, classes = {}, className, containerClassName, color = 'light', dropdownItems, icon, image, padding = 'default', title, variant = 'filled'}: BlockProps) {
    const content = <>
        { title && (
            <div className={clsx(paddings['default'], 'border-b-1 flex justify-between items-center')}>
                <Text variant={'title5'} text={title} />
                {btnLabel && <Button color={color}>{btnLabel}</Button>}
                {dropdownItems && <Dropdown menuItems={dropdownItems} color={color} variant={variant} />}
                <Icon icon={icon} />
            </div>
        )}
        <div className={clsx(paddings[padding], classes.content, 'text-md')}>
            {children || ''}
        </div>
    </>
    return (
        <div className={clsx(className, !image && containerClassName, corners[corner || 'rounded'], 'relative flex flex-col', elevations[`${elevation}`], boxClass({color, variant}))} >
            {image && (
                <Container bgImage={image} className={clsx(containerClassName, classes.root)}>
                    {content}
                </Container>
            )}
            {!image && content}
        </div>
    );
}

export interface BaseBlockProps {
    children?: children,
    classes?: classes,
    className?: class_name,
    containerClassName?: class_name,
    color?: box_color,
    padding?: box_padding,
    variant?: box_variant,
    elevation?: number,
    corner?: 'rounded' | 'rounded-small' | 'square',
}

export interface BlockProps extends BaseBlockProps {
    btnLabel?: rich_text,
    dropdownItems?: dropdown_item[],
    icon?: icon,
    image?: image,
    title?: rich_text,
}

export default Block
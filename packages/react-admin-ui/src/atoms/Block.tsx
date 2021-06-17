import clsx from 'clsx';
import boxClass from '../utils/boxClass';
import {box_color, box_variant, box_padding, image, class_name, children, corner} from '../types';
import Container from './Container';
import BlockHeader, {BlockHeaderProps} from "./BlockHeader";
import BlockContent, {BlockContentProps} from "./BlockContent";

const elevations = {
    '1': 'shadow-block',
    '2': 'shadow-upper-block',
}

export function Block({elevation = 1, corner = 'rounded', btnLabel, children, className, contentClassName, color = 'default', dropdownItems, icon, image, padding = 'default', title, variant = 'filled'}: BlockProps) {
    return (
        <Container corner={corner} bgImage={image} className={clsx(className, 'relative flex flex-col', elevations[`${elevation}`], boxClass({color, variant}))} >
            <BlockHeader title={title} btnLabel={btnLabel} dropdownItems={dropdownItems} color={color} variant={variant} icon={icon} />
            <BlockContent padding={padding} className={contentClassName}>
                {children || ''}
            </BlockContent>
        </Container>
    );
}

export interface BaseBlockProps extends BlockHeaderProps, BlockContentProps {
    children?: children,
    className?: class_name,
    contentClassName?: class_name,
    color?: box_color,
    padding?: box_padding,
    variant?: box_variant,
    elevation?: number,
    corner?: corner,
}

export interface BlockProps extends BaseBlockProps {
    image?: image,
}

export default Block
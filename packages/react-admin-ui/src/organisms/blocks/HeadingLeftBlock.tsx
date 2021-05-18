import Text from "../../atoms/Text";
import Block from "../../atoms/Block";
import {box_color, box_variant} from "../../types";

export function HeadingLeftBlock({color, variant = 'filled', title, subtitle, description, btnLabel}: HeadingLeftBlockProps) {
    return (
        <Block variant={variant} color={color} title={title} btnLabel={btnLabel}>
            <div className={'space-y-2'}>
                <Text text={subtitle} variant={'body'} />
                <Text text={description} variant={'description'} />
            </div>
        </Block>
    );
}

export interface HeadingLeftBlockProps {
    title?: string,
    subtitle?: string,
    description?: string,
    btnLabel?: string,
    color?: box_color,
    variant?: box_variant,
}

export default HeadingLeftBlock
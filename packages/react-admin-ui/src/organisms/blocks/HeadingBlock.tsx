import Avatar from '../../atoms/Avatar';
import Block, { BaseBlockProps } from '../../atoms/Block';
import Button from '../../atoms/Button';
import Pill from '../../atoms/Pill';
import Text from '../../atoms/Text';
import Corner from '../../molecules/Corner';
import { flag, icon_variant } from '../../types';
import { WithButtonLabel, WithImage, WithText, WithTitle } from '../../withs';

export function HeadingBlock({
    btnLabel,
    iconTitle,
    image,
    text,
    title,
    iconCornerTopLeft,
    textCornerTopLeft,
    topLeft,
    iconCornerTopRight,
    textCornerTopRight,
    topRight,
    bottomLeft,
    iconCornerBottomLeft,
    textCornerBottomLeft,
    bottomRight,
    iconCornerBottomRight,
    textCornerBottomRight,
    ...props
}: HeadingBlockProps) {
    return (
        <Block {...props} image={image}>
            {topLeft && (
                <div className={'absolute top-4 left-4'}>
                    <Corner
                        color={props.color}
                        variant={'header-contained' === props.variant ? 'filled' : props.variant}
                        text={textCornerTopLeft}
                        iconCorner={iconCornerTopLeft}
                    />
                </div>
            )}
            {topRight && (
                <div className={'absolute top-4 right-4'}>
                    <Corner
                        color={props.color}
                        variant={'header-contained' === props.variant ? 'filled' : props.variant}
                        text={textCornerTopRight}
                        iconCorner={iconCornerTopRight}
                    />
                </div>
            )}
            <div className={'flex items-center flex-col mt-4'}>
                <Avatar name={'noname'} />
                <div className={'flex inline-block'}>
                    <Text text={title} variant={'title4'} />
                    <div className={'ml-2 font-bold'}>
                        <Pill text={iconTitle} color={props.color} />
                    </div>
                </div>
                <Text className={'m-4'} text={text} variant={'body'} />
                <Button
                    variant={'header-contained' === props.variant ? 'filled' : props.variant}
                    color={props.color}
                    label={btnLabel}
                />
            </div>
            {bottomLeft && (
                <div className={'absolute bottom-4 left-4'}>
                    <Corner
                        color={props.color}
                        variant={'header-contained' === props.variant ? 'filled' : props.variant}
                        text={textCornerBottomLeft}
                        iconCorner={iconCornerBottomLeft}
                    />
                </div>
            )}
            {bottomRight && (
                <div className={'absolute bottom-4 right-4'}>
                    <Corner
                        color={props.color}
                        variant={'header-contained' === props.variant ? 'filled' : props.variant}
                        text={textCornerBottomRight}
                        iconCorner={iconCornerBottomRight}
                    />
                </div>
            )}
        </Block>
    );
}

export interface HeadingBlockProps extends BaseBlockProps, WithButtonLabel, WithText, WithImage, WithTitle {
    bottomLeft?: flag;
    bottomRight?: flag;
    iconCornerBottomLeft?: icon_variant;
    iconCornerBottomRight?: icon_variant;
    iconCornerTopLeft?: icon_variant;
    iconCornerTopRight?: icon_variant;
    iconTitle?: string;
    textCornerBottomLeft?: string;
    textCornerBottomRight?: string;
    textCornerTopLeft?: string;
    textCornerTopRight?: string;
    topLeft?: flag;
    topRight?: flag;
}

// noinspection JSUnusedGlobalSymbols
export default HeadingBlock;

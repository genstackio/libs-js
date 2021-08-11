import Avatar from '../../atoms/Avatar';
import Block, { BaseBlockProps } from '../../atoms/Block';
import Buttons from '../../atoms/Buttons';
import Pill from '../../atoms/Pill';
import Text from '../../atoms/Text';
import Corner from '../../molecules/Corner';
import { flag, icon_variant } from '../../types';
import { WithButtons, WithImage, WithText, WithTitle } from '../../withs';
import useButtons from '../../hooks/useButtons';
import { useBlock } from '../../hooks';

export function HeadingBlock({
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
    const [bProps, rest] = useBlock(props, { image });
    const [buttonProps] = useButtons(rest);
    return (
        <Block {...bProps}>
            {topLeft && (
                <div className={'absolute top-4 left-4'}>
                    <Corner
                        color={rest.color}
                        variant={'header-contained' === rest.variant ? 'filled' : rest.variant}
                        text={textCornerTopLeft}
                        iconCorner={iconCornerTopLeft}
                    />
                </div>
            )}
            {topRight && (
                <div className={'absolute top-4 right-4'}>
                    <Corner
                        color={rest.color}
                        variant={'header-contained' === rest.variant ? 'filled' : rest.variant}
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
                        <Pill text={iconTitle} color={rest.color} />
                    </div>
                </div>
                <Text className={'m-4'} text={text} variant={'body'} />
                <Buttons {...buttonProps} className={'flex justify-center'} />
            </div>
            {bottomLeft && (
                <div className={'absolute bottom-4 left-4'}>
                    <Corner
                        color={rest.color}
                        variant={'header-contained' === rest.variant ? 'filled' : rest.variant}
                        text={textCornerBottomLeft}
                        iconCorner={iconCornerBottomLeft}
                    />
                </div>
            )}
            {bottomRight && (
                <div className={'absolute bottom-4 right-4'}>
                    <Corner
                        color={rest.color}
                        variant={'header-contained' === rest.variant ? 'filled' : rest.variant}
                        text={textCornerBottomRight}
                        iconCorner={iconCornerBottomRight}
                    />
                </div>
            )}
        </Block>
    );
}

export interface HeadingBlockProps extends BaseBlockProps, WithButtons, WithText, WithImage, WithTitle {
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

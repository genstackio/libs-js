import Div from '../../atoms/Div';
import Column from '../../atoms/Column';
import Avatar from '../../atoms/Avatar';
import Block, { BaseBlockProps } from '../../atoms/Block';
import Buttons from '../../atoms/Buttons';
import Pill from '../../atoms/Pill';
import Text from '../../atoms/Text';
import Corner from '../../molecules/Corner';
import { flag, icon_variant } from '../../types';
import useButtons from '../../hooks/useButtons';
import useBlock from '../../hooks/useBlock';
import { WithButtons, WithImage, WithText, WithTitle } from '../../withs';

export function HeadingBlock({
    bottomLeft,
    bottomRight,
    iconCornerBottomLeft,
    iconCornerBottomRight,
    iconCornerTopLeft,
    iconCornerTopRight,
    iconTitle,
    image,
    text,
    textCornerBottomLeft,
    textCornerBottomRight,
    textCornerTopLeft,
    textCornerTopRight,
    title,
    topLeft,
    topRight,
    ...props
}: HeadingBlockProps) {
    const [bProps, rest] = useBlock(props, { image });
    const [btProps] = useButtons(rest);

    return (
        <Block {...bProps}>
            {topLeft && (
                <Div absolute className={'top-4 left-4'}>
                    <Corner
                        color={rest.color}
                        iconCorner={iconCornerTopLeft}
                        text={textCornerTopLeft}
                        variant={'header-contained' === rest.variant ? 'filled' : rest.variant}
                    />
                </Div>
            )}
            {topRight && (
                <Div absolute className={'top-4 right-4'}>
                    <Corner
                        color={rest.color}
                        iconCorner={iconCornerTopRight}
                        text={textCornerTopRight}
                        variant={'header-contained' === rest.variant ? 'filled' : rest.variant}
                    />
                </Div>
            )}
            <Column center mt={'md'}>
                <Avatar name={'noname'} />
                <Div flex inline>
                    <Text text={title} variant={'title4'} />
                    <div className={'ml-2 font-bold'}>
                        <Pill color={rest.color} text={iconTitle} />
                    </div>
                </Div>
                <Text m={'md'} text={text} variant={'body'} />
                <Buttons {...btProps} className={'flex justify-center'} />
            </Column>
            {bottomLeft && (
                <Div absolute className={'bottom-4 left-4'}>
                    <Corner
                        color={rest.color}
                        iconCorner={iconCornerBottomLeft}
                        text={textCornerBottomLeft}
                        variant={'header-contained' === rest.variant ? 'filled' : rest.variant}
                    />
                </Div>
            )}
            {bottomRight && (
                <Div absolute className={'bottom-4 right-4'}>
                    <Corner
                        color={rest.color}
                        iconCorner={iconCornerBottomRight}
                        text={textCornerBottomRight}
                        variant={'header-contained' === rest.variant ? 'filled' : rest.variant}
                    />
                </Div>
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

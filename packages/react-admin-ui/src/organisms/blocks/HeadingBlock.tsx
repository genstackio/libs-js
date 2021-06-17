import {Avatar, BaseBlockProps, Block, Button, Pill, Text} from '../../atoms';
import {Corner} from "../../molecules";
import {flag, image, icon_variant} from "../../types";

export function HeadingBlock(
    {btnLabel, iconTitle, image, text, title,
        iconCornerTopLeft, textCornerTopLeft, topLeft,
        iconCornerTopRight, textCornerTopRight, topRight,
        bottomLeft, iconCornerBottomLeft, textCornerBottomLeft,
        bottomRight, iconCornerBottomRight, textCornerBottomRight,
        ...props}: HeadingBlockProps) {

    return (
        <Block {...props} image={image}>
            {topLeft && (
                <div className={'absolute top-4 left-4'}>
                    <Corner color={props.color} variant={props.variant} text={textCornerTopLeft} iconCorner={iconCornerTopLeft} />
                </div>
            )}
            {topRight && (
                <div className={'absolute top-4 right-4'}>
                    <Corner color={props.color} variant={props.variant} text={textCornerTopRight} iconCorner={iconCornerTopRight} />
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
                <Button variant={props.variant} color={props.color}>{btnLabel}</Button>
            </div>
            {bottomLeft  && <div className={'absolute bottom-4 left-4'}>
                <Corner color={props.color} variant={props.variant} text={textCornerBottomLeft} iconCorner={iconCornerBottomLeft} />
            </div>}
            {bottomRight  && <div className={'absolute bottom-4 right-4'}>
                <Corner color={props.color} variant={props.variant} text={textCornerBottomRight} iconCorner={iconCornerBottomRight} />
            </div>}
        </Block>
    );
}

export interface HeadingBlockProps extends BaseBlockProps {
    bottomLeft?: flag,
    bottomRight?: flag,
    btnLabel: string,
    iconCornerBottomLeft?: icon_variant,
    iconCornerBottomRight?: icon_variant,
    iconCornerTopLeft?: icon_variant,
    iconCornerTopRight?: icon_variant,
    iconTitle?: string,
    image: image,
    text: string,
    textCornerBottomLeft?: string,
    textCornerBottomRight?: string,
    textCornerTopLeft?: string,
    textCornerTopRight?: string,
    title: string,
    topLeft?: flag,
    topRight?: flag,
}

export default HeadingBlock
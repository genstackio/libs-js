import Pill from '../../atoms/Pill';
import Button from '../../atoms/Button';
import Block, {BaseBlockProps} from '../../atoms/Block';
import {Avatar} from '../../atoms';
import {Corner} from "../../molecules";
import {image, icon_variant} from "../../types";

export function HeadingBlock(
    {title, text, btnLabel, image, iconTitle,
        topLeft, textCornerTopLeft, iconCornerTopLeft,
        topRight, textCornerTopRight, iconCornerTopRight,
        bottomLeft, textCornerBottomLeft, iconCornerBottomLeft,
        bottomRight, textCornerBottomRight, iconCornerBottomRight,
        ...props}: HeadingBlockProps) {

    return (
        <Block {...props} image={image}>
            {topLeft  && <div className = 'absolute top-4 left-4'>
                <Corner color = {props.color} variant={props.variant} text={textCornerTopLeft} iconCorner={iconCornerTopLeft} />
            </div>}
            {topRight  && <div className = 'absolute top-4 right-4'>
                <Corner color = {props.color} variant={props.variant} text={textCornerTopRight} iconCorner={iconCornerTopRight} />
            </div>}
            <div className = 'flex items-center flex-col mt-4'>
                <Avatar name = {'toto'} />
                <div className = 'flex inline-block'>
                    <h1 className ='font-black text-3xl'>{title}</h1>
                    <div className = 'ml-2 font-bold'>
                        <Pill text = {iconTitle} color = {props.color} />
                    </div>
                </div>
                <h2 className = 'm-4'>{text}</h2>
                <Button children = {btnLabel} variant={props.variant} color={props.color}  />
            </div>
            {bottomLeft  && <div className = 'absolute bottom-4 left-4'>
                <Corner color = {props.color} variant={props.variant} text={textCornerBottomLeft} iconCorner={iconCornerBottomLeft} />
            </div>}
            {bottomRight  && <div className = 'absolute bottom-4 right-4'>
                <Corner color = {props.color} variant={props.variant} text={textCornerBottomRight} iconCorner={iconCornerBottomRight} />
            </div>}
        </Block>
    );
}

export interface HeadingBlockProps extends BaseBlockProps {
    title: string,
    text: string,
    btnLabel: string,
    image: image,
    topLeft?: boolean,
    textCornerTopLeft?: string,
    iconCornerTopLeft?: icon_variant,
    topRight?: boolean,
    textCornerTopRight?: string,
    iconCornerTopRight?: icon_variant,
    bottomLeft?: boolean,
    textCornerBottomLeft?: string,
    iconCornerBottomLeft?: icon_variant,
    bottomRight?: boolean,
    textCornerBottomRight?: string,
    iconCornerBottomRight?: icon_variant,
    iconTitle?: string,
}

export default HeadingBlock
import { Clickable } from '../atoms/Clickable';
import { Block } from '../atoms/Block';
import { Text } from '../atoms/Text';
import Div from '../atoms/Div';
import Image from '../atoms/Image';
import { Button } from '../atoms/Button';
import { AsComponent } from '../as';
import {
    WithButton2Label,
    WithButton2Target,
    WithButton2Type,
    WithButtonLabel,
    WithButtonTarget,
    WithButtonType,
    WithImage,
    WithLabel,
    WithTarget,
    WithTitle,
} from '../withs';

export function ItemCarrousselSlide({
    btnLabel,
    btnTarget,
    className,
    image,
    label,
    target,
    title,
}: ItemCarrousselSlideProps) {
    return (
        <Div col full pb={'sm'} relative spaced className={className}>
            <Clickable onClick={target} className={'max-w-full'}>
                <Div full relative>
                    <Block
                        col
                        elevation={2}
                        relative
                        className={
                            'bg-clear justify-center box-border p-4 rounded-2xl h-64 sm:h-80 w-40 sm:h-48 md:w-56 xl:w-72'
                        }
                    >
                        <Image contained className={'w-full'} {...image} />
                    </Block>
                    <Div mt={'xs'}>
                        <Text text={title} variant={'title5'} />
                        <Text text={label} variant={'body'} />
                    </Div>
                </Div>
            </Clickable>
            <Button
                color={'primary'}
                label={btnLabel}
                onClick={btnTarget}
                variant={'outlined'}
                className={'self-start mt-2.5'}
            />
        </Div>
    );
}

export interface ItemCarrousselSlideProps
    extends AsComponent,
        WithImage,
        WithTitle,
        WithLabel,
        WithTarget,
        WithButtonLabel,
        WithButtonTarget,
        WithButtonType,
        WithButton2Label,
        WithButton2Target,
        WithButton2Type {}

// noinspection JSUnusedGlobalSymbols
export default ItemCarrousselSlide;

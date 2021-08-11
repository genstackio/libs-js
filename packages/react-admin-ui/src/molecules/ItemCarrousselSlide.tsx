import clsx from 'clsx';
import { Clickable } from '../atoms/Clickable';
import { Image } from '../atoms/Image';
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
import { Block } from '../atoms/Block';
import { Text } from '../atoms/Text';
import { Button } from '../atoms/Button';
import { AsComponent } from '../as';

export function ItemCarrousselSlide({
    className,
    title,
    label,
    image,
    btnLabel,
    btnTarget,
    target,
}: ItemCarrousselSlideProps) {
    return (
        <div className={clsx('flex relative flex-col justify-between w-full pb-2', className)}>
            <Clickable onClick={target} className={'max-w-full'}>
                <div className={'relative w-full'}>
                    <Block
                        elevation={2}
                        className={
                            'bg-clear relative flex flex-col justify-center h-80 w-72 ' +
                            'box-border p-4 rounded-2xl md:h-64 md:w-56 sm:h-48 sm:w-40'
                        }
                    >
                        {image && <Image className={'w-full'} objectFit={'contain'} {...image} />}
                    </Block>
                    <div className={'mt-1'}>
                        <Text variant={'title5'} text={title} />
                        <Text variant={'body'} text={label} />
                    </div>
                </div>
            </Clickable>
            <Button
                variant={'outlined'}
                color={'primary'}
                onClick={btnTarget}
                className={'self-start mt-2.5'}
                label={btnLabel}
            />
        </div>
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

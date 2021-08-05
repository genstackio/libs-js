import { Clickable } from '../atoms/Clickable';
import { Image } from '../atoms/Image';
import { WithButtonLabel, WithButtonTarget, WithImage, WithLabel, WithTarget, WithTitle } from '../withs';
import { Block } from '../atoms/Block';
import { Text } from '../atoms/Text';
import { Button } from '../atoms/Button';

export function ItemCarrousselSlide({
    title,
    label,
    image,
    btnLabel,
    btnTarget,
    button2Target,
    buttonType,
    target,
}: ItemCarrousselSlideProps) {
    return (
        <div className={'flex relative flex-col justify-between w-full pb-2'}>
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
            {btnLabel && (
                <Button variant={'outlined'} color={'primary'} onClick={btnTarget} className={'self-start mt-2.5'}>
                    {btnLabel}
                </Button>
            )}
        </div>
    );
}

export interface ItemCarrousselSlideProps
    extends WithImage,
        WithTitle,
        WithLabel,
        WithTarget,
        WithButtonLabel,
        WithButtonTarget {
    button2Target?: string; // temporary used as target
    buttonType?: string;
}

export default ItemCarrousselSlide;

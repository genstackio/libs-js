import Image from '../atoms/Image';
import Block from '../atoms/Block';
import { Text } from '../atoms';
import { WithButtonLabel, WithButtonTarget, WithImage, WithSubtitle, WithTitle } from '../withs';
import { flag } from '../types';
import Button from '../atoms/Button';

export function ArgumentBlock({
    title,
    subtitle,
    image,
    noImage = false,
    noShadow = false,
    btnLabel,
    btnTarget,
}: ArgumentBlockProps) {
    return (
        <Block
            padding={'none'}
            corner={'rounded'}
            className={'flex flex-col overflow-hidden bg-clear'}
            elevation={noShadow ? 0 : 2}
        >
            <div className={'flex-1 p-4 lg:p-3 sm:p-2 bg-clear'}>
                <Text variant={'title6'} text={title} />
                <Text variant={'subtitle'} text={subtitle} />
                {btnLabel && (
                    <Button color={'primary'} variant={'outlined'} onClick={btnTarget} className={'mt-2'}>
                        {btnLabel}
                    </Button>
                )}
            </div>
            {!noImage && (
                <div className={'leading-none'}>
                    <Image {...image} objectFit={'contain'} />
                </div>
            )}
            {noImage && <div className={'h-80 flex items-center lg:h-60 sm:h-40'} />}
        </Block>
    );
}

export interface ArgumentBlockProps extends WithTitle, WithSubtitle, WithImage, WithButtonLabel, WithButtonTarget {
    noImage?: flag;
    noShadow?: flag;
}

export default ArgumentBlock;

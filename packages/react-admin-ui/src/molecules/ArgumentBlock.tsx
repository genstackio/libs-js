import clsx from 'clsx';
import Image from '../atoms/Image';
import Block from '../atoms/Block';
import { Text } from '../atoms';
import { WithButton, WithImage, WithSubtitle, WithTitle } from '../withs';
import { flag } from '../types';
import Button from '../atoms/Button';
import { AsComponent } from '../as';

export function ArgumentBlock({
    className,
    title,
    subtitle,
    image,
    noImage = false,
    noShadow = false,
    btnLabel,
    btnTarget,
    btnIcon,
    btnEndIcon,
    btnType,
    btnColor,
}: ArgumentBlockProps) {
    return (
        <Block
            padding={'none'}
            corner={'rounded'}
            className={clsx('flex flex-col overflow-hidden bg-clear', className)}
            elevation={noShadow ? 0 : 2}
        >
            <div className={'flex-1 p-4 lg:p-3 sm:p-2 bg-clear'}>
                <Text variant={'title6'} text={title} />
                <Text variant={'subtitle'} text={subtitle} />
                {btnLabel && (
                    <Button
                        color={btnColor || 'primary'}
                        variant={(btnType as any) || 'outlined'}
                        onClick={btnTarget}
                        className={'mt-2'}
                        icon={btnIcon}
                        endIcon={btnEndIcon}
                    >
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

export interface ArgumentBlockProps extends AsComponent, WithTitle, WithSubtitle, WithImage, WithButton {
    noImage?: flag;
    noShadow?: flag;
}

// noinspection JSUnusedGlobalSymbols
export default ArgumentBlock;

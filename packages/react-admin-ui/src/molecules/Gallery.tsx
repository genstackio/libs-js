import clsx from 'clsx';
import Image from '../atoms/Image';
import Text from '../atoms/Text';
import Button from '../atoms/Button';
import Icon from '../atoms/Icon';
import { gallery_image, rich_text, target, text_color, box_color } from '../types';
import { WithClassName, WithTitle, WithIcon } from '../withs';

export function Gallery({
    className,
    items = [],
    title,
    btnLabel,
    btnTarget,
    btnColor = 'primary',
    icon,
    iconColor = 'primary',
}: GalleryProps) {
    return (
        <div className={clsx(className)}>
            {(title || btnLabel || btnTarget || icon) && (
                <div className={'flex justify-between pb-2 pt-2'}>
                    <div className={'flex items-center space-x-4'}>
                        {icon && <Icon icon={icon} color={iconColor} />}
                        <Text variant={'title5'} text={title || ''} />
                    </div>
                    {(btnLabel || btnTarget) && (
                        <Button
                            className={'th-button-white normal-case xs:invisible'}
                            onClick={btnTarget}
                            color={btnColor}
                        >
                            {btnLabel}
                        </Button>
                    )}
                </div>
            )}
            <div className={clsx('grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-3', className)}>
                {items.map((item, index) => (
                    <div className={'border-double border-4 rounded-md'} key={index}>
                        <Image className={'w-full'} {...item} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export interface GalleryProps extends WithClassName, WithTitle, WithIcon {
    items?: gallery_image[];
    btnLabel?: rich_text;
    btnTarget?: target;
    btnColor?: box_color;
    iconColor?: text_color;
}

// noinspection JSUnusedGlobalSymbols
export default Gallery;

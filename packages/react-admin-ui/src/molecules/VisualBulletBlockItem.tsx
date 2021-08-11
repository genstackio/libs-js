import clsx from 'clsx';
import Icon from '../atoms/Icon';
import Text from '../atoms/Text';
import { AsComponent } from '../as';
import { WithIcon, WithSubtitle, WithTitle } from '../withs';

export function VisualBulletBlockItem({ className, icon, title, subtitle }: VisualBulletBlockItemProps) {
    return (
        <div className={clsx('flex items-center', className)}>
            <Icon className={'mb-5'} size={'4xl'} icon={icon} />
            <div className={'flex-column ml-4'}>
                <Text text={title} variant={'title6'} />
                <p>{subtitle || ''}</p>
            </div>
        </div>
    );
}

export interface VisualBulletBlockItemProps extends AsComponent, WithIcon, WithTitle, WithSubtitle {}

// noinspection JSUnusedGlobalSymbols
export default VisualBulletBlockItem;

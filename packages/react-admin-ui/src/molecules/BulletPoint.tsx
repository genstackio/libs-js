import clsx from 'clsx';
import Icon from '../atoms/Icon';
import Text from '../atoms/Text';
import { WithBox, WithClassName, WithIcon, WithText, WithTitle } from '../withs';

export function BulletPoint({ className, icon, text, title, color }: BulletPointProps) {
    return (
        <div className={clsx('flex items-center', className)}>
            <Icon icon={icon} />
            <div className={'flex-column ml-4'}>
                <Text text={title} variant={'title5'} color={color} />
                <Text text={text} variant={'body'} color={color} />
            </div>
        </div>
    );
}

export interface BulletPointProps extends WithClassName, WithBox, WithIcon, WithText, WithTitle {}

export default BulletPoint;

import clsx from 'clsx';
import boxClass from '../utils/boxClass';
import Icon from './Icon';
import Text from './Text';
import { BoxProvider } from '@genstackio/react-contexts/lib/contexts/BoxContext';
import { WithBox, WithClassName, WithIcon, WithText, WithTextSize } from '../withs';

export function Tag({ className, color = 'primary', icon, size, text, variant = 'contained' }: TagProps) {
    return (
        <div
            className={clsx(
                boxClass({ color, variant, size }),
                'inline-flex px-4 rounded-lg font-bold uppercase py-1 space-x-1',
                className,
            )}
        >
            <BoxProvider value={{ color, variant }}>
                <Text text={text} />
                <Icon size={size} icon={icon} />
            </BoxProvider>
        </div>
    );
}

export interface TagProps extends WithClassName, WithBox, WithIcon, WithText, WithTextSize {}

export default Tag;

import clsx from 'clsx';
import boxClass from '../utils/boxClass';
import { class_name, icon, rich_text, text_size } from '../types';
import Icon from './Icon';
import Text from './Text';
import { box_color } from '../mappings/box-colors';
import { box_variant } from '../mappings/box-variants';
import { BoxProvider } from '@genstackio/react-contexts/lib/contexts/BoxContext';

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
                {text && <Text text={text} />}
                <Icon size={size} icon={icon} />
            </BoxProvider>
        </div>
    );
}

export interface TagProps {
    className?: class_name;
    color?: box_color;
    icon?: icon;
    size?: text_size;
    text?: rich_text;
    variant?: box_variant;
}

export default Tag;

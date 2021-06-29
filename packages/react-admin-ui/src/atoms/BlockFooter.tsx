import clsx from 'clsx';
import Buttons from './Buttons';
import { box_color, box_variant, class_name } from '../types';
import paddingClass from '../mappings/paddings';
import bgClass from '../utils/bgClass';
import { BoxProvider } from '@genstackio/react-contexts/lib/contexts/BoxContext';

export function BlockFooter({ className, buttons = [], color = 'primary', variant = 'filled' }: BlockFooterProps) {
    if (!buttons || !buttons.length) return null;
    return (
        <div
            className={clsx(
                bgClass({ color, variant }),
                paddingClass('default'),
                'border-t-1 flex justify-between items-center',
                className,
            )}
        >
            <BoxProvider value={{ color, variant }}>
                <Buttons buttons={buttons} />
            </BoxProvider>
        </div>
    );
}

export interface BlockFooterProps {
    className?: class_name;
    buttons?: any[];
    color?: box_color;
    variant?: box_variant;
}

export default BlockFooter;

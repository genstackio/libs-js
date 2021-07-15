import clsx from 'clsx';
import Buttons from './Buttons';
import { class_name } from '../types';
import bgClass from '../utils/bgClass';
import { BoxProvider } from '@genstackio/react-contexts/lib/contexts/BoxContext';
import { WithBox, WithClassName } from '../withs';
import Div from './Div';

export function BlockFooter({
    className,
    buttonsClassName,
    buttons = [],
    color = 'primary',
    variant = 'filled',
}: BlockFooterProps) {
    if (!buttons || !buttons.length) return null;
    return (
        <Div
            padding={'default'}
            className={clsx(bgClass({ color, variant }), 'border-t-1 flex justify-between items-center', className)}
        >
            <BoxProvider value={{ color, variant }}>
                <Buttons buttons={buttons} className={clsx(buttonsClassName)} />
            </BoxProvider>
        </Div>
    );
}

export interface BlockFooterProps extends WithClassName, WithBox {
    buttonsClassName?: class_name;
    buttons?: any[];
}

export default BlockFooter;

import clsx from 'clsx';
import Buttons from './Buttons';
import { class_name } from '../types';
import bgClass from '../utils/bgClass';
import { BoxProvider } from '@genstackio/react-contexts/lib/contexts/BoxContext';
import { WithBox, WithButtons } from '../withs';
import Div from './Div';
import { AsWrapper } from '../as';

export function BlockFooter({
    className,
    buttonsClassName,
    buttons = [],
    color = 'primary',
    variant = 'filled',
    children,
}: BlockFooterProps) {
    if (!buttons || !buttons.length) return null;
    return (
        <Div
            padding={'default'}
            className={clsx(bgClass({ color, variant }), 'border-t-1 flex justify-between items-center', className)}
        >
            <BoxProvider value={{ color, variant }}>
                {children || ''}
                <Buttons buttons={buttons} className={clsx(buttonsClassName)} />
            </BoxProvider>
        </Div>
    );
}

export interface BlockFooterProps extends AsWrapper, WithButtons, WithBox {
    buttonsClassName?: class_name;
}

// noinspection JSUnusedGlobalSymbols
export default BlockFooter;

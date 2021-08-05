import clsx from 'clsx';
import ButtonItems from './ButtonItems';
import { class_name } from '../types';
import bgClass from '../utils/bgClass';
import { BoxProvider } from '@genstackio/react-contexts/lib/contexts/BoxContext';
import Div from './Div';
import { AsBoxWrapper } from '../as';

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
                <ButtonItems items={buttons} className={clsx(buttonsClassName)} />
            </BoxProvider>
        </Div>
    );
}

export interface BlockFooterProps extends AsBoxWrapper {
    buttonsClassName?: class_name;
    buttons?: any[];
}

// noinspection JSUnusedGlobalSymbols
export default BlockFooter;

import clsx from 'clsx';
import boxClass from '../utils/boxClass';
import Icon from './Icon';
import Div from './Div';
import { BoxProvider } from '@genstackio/react-contexts/src/contexts/BoxContext';
import { WithSize, WithIcon } from '../withs';
import { AsBoxWrapper } from '../as';

export function Frame({ icon, size, className, children, color = 'clear', variant = 'outlined' }: FrameProps) {
    return (
        <Div
            full
            flex
            className={clsx(boxClass({ color, variant, size }), 'flex-col mt-4 border rounded-lg relative', className)}
        >
            <BoxProvider value={{ color, variant }}>
                <div className="flex items-center ml-4 mb-1 ">
                    <Icon
                        icon={icon}
                        size={size}
                        className={'w-10 h-10 bg-clear flex items-center justify-center rounded-full border absolute'}
                    />
                </div>
                <div className={'p-8'}>{children || ''}</div>
            </BoxProvider>
        </Div>
    );
}

export interface FrameProps extends AsBoxWrapper, WithIcon, WithSize {}

// noinspection JSUnusedGlobalSymbols
export default Frame;

import clsx from 'clsx';
import boxClass from '../utils/boxClass';
import Icon from './Icon';
import { BoxProvider } from '@genstackio/react-contexts/src/contexts/BoxContext';
import { WithBox, WithChildren, WithClassName, WithSize, WithIcon } from '../withs';

export function Frame({ icon, size, className, children, color = 'clear', variant = 'outlined' }: FrameProps) {
    return (
        <div
            className={clsx(
                boxClass({ color, variant, size }),
                'flex flex-col w-full mt-4 border rounded-lg relative',
                className,
            )}
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
        </div>
    );
}

export interface FrameProps extends WithClassName, WithBox, WithIcon, WithSize, WithChildren {}

export default Frame;

import clsx from 'clsx';
import { flag, ribbon_position } from '../types';
import boxClass from '../utils/boxClass';
import Icon from './Icon';
import { WithBoxColor, WithChildren, WithClassName, WithText } from '../withs';

export function Ribbon({ className, children, color, horizontal, position = 'top-left', text, vertical }: RibbonProps) {
    let triangle_position,
        horizontal_rectangle_position,
        triangle_rotate,
        vertical_rectangle_position,
        top_space,
        bottom_space;
    {
        (() => {
            switch (position) {
                case 'top-right':
                    return ([
                        horizontal_rectangle_position,
                        triangle_position,
                        triangle_rotate,
                        vertical_rectangle_position,
                        top_space,
                    ] = [
                        'absolute top-0 -right-4',
                        'absolute top-10 -right-4',
                        'h-16 rotate-45 transform origin-top-right',
                        'absolute top-10 -right-2',
                        true,
                    ]);
                case 'bottom-left':
                    return ([
                        horizontal_rectangle_position,
                        triangle_position,
                        triangle_rotate,
                        vertical_rectangle_position,
                        bottom_space,
                    ] = [
                        'absolute bottom-6 -left-2',
                        'absolute bottom-3 -left-2',
                        'h-16 -rotate-45 transform origin-bottom-left',
                        'absolute bottom-10 -left-2',
                        true,
                    ]);
                case 'bottom-right':
                    return ([
                        horizontal_rectangle_position,
                        triangle_position,
                        triangle_rotate,
                        vertical_rectangle_position,
                        bottom_space,
                    ] = [
                        'absolute bottom-6 -right-2',
                        'absolute bottom-3 -right-2',
                        'h-16 rotate-45 transform origin-bottom-right',
                        'absolute bottom-10 -right-2',
                        true,
                    ]);
                case 'top-left':
                default:
                    return ([
                        horizontal_rectangle_position,
                        triangle_position,
                        triangle_rotate,
                        vertical_rectangle_position,
                        top_space,
                    ] = [
                        'absolute top-0 -left-4',
                        'absolute top-10 -left-4',
                        'h-16 -rotate-45 transform origin-top-left',
                        'absolute top-10 left-2',
                        true,
                    ]);
            }
        })();
    }
    return (
        <div>
            {horizontal && (
                <div>
                    {bottom_space ? children : ''}
                    <div
                        className={clsx(
                            boxClass({ color, variant: 'contained' }),
                            horizontal_rectangle_position,
                            'py-2 w-28 h-10 text-center shadow-md font-sans uppercase ',
                            className,
                        )}
                    >
                        {text}
                    </div>
                    <div className={clsx(triangle_position, 'w-5 overflow-hidden inline-block')}>
                        <div className={clsx(boxClass({ color, variant: 'contained' }), triangle_rotate)} />
                    </div>
                    <div className={'mt-8'} />
                    {top_space ? children : ''}
                </div>
            )}
            {vertical && (
                <div>
                    {bottom_space ? children : ''}
                    <div className={'mt-24'} />
                    <div className={clsx(vertical_rectangle_position, '')}>
                        <div
                            className={clsx(
                                boxClass({ color, variant: 'contained' }),
                                'w-32 transform rotate-90 text-center text-clear py-1',
                                className,
                            )}
                        >
                            <Icon icon={'settings'} />
                        </div>
                    </div>
                    {top_space ? children : ''}
                </div>
            )}
            {horizontal || vertical ? '' : <div>{children}</div>}
        </div>
    );
}

export interface RibbonProps extends WithClassName, WithChildren, WithText, WithBoxColor {
    horizontal?: flag;
    position?: ribbon_position;
    vertical?: flag;
}

// noinspection JSUnusedGlobalSymbols
export default Ribbon;

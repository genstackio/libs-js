import clsx from 'clsx';
import Div from './Div';
import Icon from './Icon';
import { flag, ribbon_position } from '../types';
import boxClass from '../mappings/boxs';
import { AsWrapper } from '../as';
import { WithColorOfBox, WithText } from '../withs';

export function Ribbon({ children, className, color, horizontal, position = 'top-left', text, vertical }: RibbonProps) {
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
                    <Div
                        py={'sm'}
                        className={clsx(
                            boxClass({ color, variant: 'contained' }),
                            horizontal_rectangle_position,
                            'w-28 h-10 text-center shadow-md font-sans uppercase ',
                            className,
                        )}
                    >
                        {text}
                    </Div>
                    <Div inline cropped className={clsx(triangle_position, 'w-5')}>
                        <div className={clsx(boxClass({ color, variant: 'contained' }), triangle_rotate)} />
                    </Div>
                    <Div mt={'xl'} />
                    {top_space ? children : ''}
                </div>
            )}
            {vertical && (
                <div>
                    {bottom_space ? children : ''}
                    <div className={'mt-24'} />
                    <div className={clsx(vertical_rectangle_position, '')}>
                        <Div
                            py={'xs'}
                            className={clsx(
                                boxClass({ color, variant: 'contained' }),
                                'w-32 transform rotate-90 text-center text-clear',
                                className,
                            )}
                        >
                            <Icon icon={'settings'} />
                        </Div>
                    </div>
                    {top_space ? children : ''}
                </div>
            )}
            {horizontal || vertical ? '' : <div>{children}</div>}
        </div>
    );
}

export interface RibbonProps extends AsWrapper, WithText, WithColorOfBox {
    horizontal?: flag;
    position?: ribbon_position;
    vertical?: flag;
}

// noinspection JSUnusedGlobalSymbols
export default Ribbon;

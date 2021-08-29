import { ReactNode, useCallback, useState } from 'react';
import clsx from 'clsx';
import Clickable from '../../atoms/Clickable';
import Image from '../../atoms/Image';
import Div from '../../atoms/Div';
import Icon from '../../atoms/Icon';
import Cell from '../../atoms/Cell';
import Menu from '../../molecules/Menu';
import textClass from '../../utils/textClass';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { menu_item } from '../../types';
import { AsBoxWrapper } from '../../as';
import { WithLogo } from '../../withs';

export function AppLayoutTemplate({ children, className, logo, menu, toolbar, ...props }: AppLayoutTemplateProps) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [show, setShow] = useState(!isMobile);
    const handleClick = useCallback(() => {
        setShow(!show);
    }, [setShow, show]);

    return (
        <Div flex hscreen className={className}>
            <Div
                absolute
                className={clsx(
                    'w-drawer bg-clear transform h-full overflow-auto transition-all duration-300 z-30',
                    show ? 'translate-x-0' : '-translate-x-full',
                )}
            >
                <Div center flex p={'sm'} className={'h-xxl shadow-toolbar'}>
                    {logo && <Image className={'flex-1'} {...logo} />}
                </Div>
                {menu && <Menu items={menu} {...props} />}
            </Div>
            <Cell col className={clsx('transition-all duration-300 ', show ? 'x-pl-drawer' : 'pl-0')}>
                <Div center flex p={'xl'} className={'h-xxl'}>
                    <Clickable onClick={handleClick} className={'mr-4'}>
                        <Icon
                            icon={'menu'}
                            className={clsx(
                                textClass({ color: props.color, variant: 'light', hoverable: true }),
                                'transition duration-300 rounded-full h-7 w-7 flex items-center justify-center',
                                'hover:bg-purple-100',
                            )}
                        />
                    </Clickable>
                    {toolbar || ''}
                </Div>
                <Div p={'md'} className={'h-screen shadow-inside'}>
                    {children}
                </Div>
            </Cell>
        </Div>
    );
}

export interface AppLayoutTemplateProps extends AsBoxWrapper, WithLogo {
    menu?: menu_item[];
    toolbar?: ReactNode;
}

// noinspection JSUnusedGlobalSymbols
export default AppLayoutTemplate;

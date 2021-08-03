import { ReactNode, useCallback, useState } from 'react';
import clsx from 'clsx';
import Menu from '../../molecules/Menu';
import Clickable from '../../atoms/Clickable';
import Image from '../../atoms/Image';
import Icon from '../../atoms/Icon';
import textClass from '../../utils/textClass';
import { menu_item } from '../../types';
import { WithBox, WithChildren, WithLogo } from '../../withs';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

export function AppLayoutTemplate({ logo, menu, children, toolbar, ...props }: AppLayoutTemplateProps) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [show, setShow] = useState(!isMobile);
    const handleClick = useCallback(() => {
        setShow(!show);
    }, [setShow, show]);
    return (
        <div className={'flex h-screen'}>
            <div
                className={clsx(
                    'w-drawer bg-clear transform h-full overflow-auto transition-all duration-300 z-30 absolute',
                    show ? 'translate-x-0' : '-translate-x-full',
                )}
            >
                <div className={'px-2 py-2 h-xxl shadow-toolbar flex items-center'}>
                    {logo && <Image className={'flex-1'} {...logo} />}
                </div>
                {menu && <Menu items={menu} {...props} />}
            </div>
            <div className={clsx('flex-1 transition-all duration-300 ', show ? 'x-pl-drawer' : 'pl-0')}>
                <div className={'px-8 py-6 h-xxl flex items-center'}>
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
                </div>
                <div className={'h-screen p-4 shadow-inside'}>{children || ''}</div>
            </div>
        </div>
    );
}

export interface AppLayoutTemplateProps extends WithBox, WithChildren, WithLogo {
    menu?: menu_item[];
    toolbar?: ReactNode;
}

export default AppLayoutTemplate;

import { ReactNode, useCallback, useState } from 'react';
import clsx from 'clsx';
import Menu from '../../molecules/Menu';
import Clickable from '../../atoms/Clickable';
import Image from '../../atoms/Image';
import Icon from '../../atoms/Icon';
import textClass from '../../utils/textClass';
import { menu_item } from '../../types';
import { WithBox, WithChildren, WithLogo } from '../../withs';

export function AppLayoutTemplate({ logo, menu, children, toolbar, ...props }: AppLayoutTemplateProps) {
    const [show, setShow] = useState(true);
    const handleClick = useCallback(() => {
        setShow(!show);
    }, [setShow, show]);
    return (
        <div className={'flex h-screen'}>
            <div className={clsx('w-drawer bg-clear transform h-full overflow-auto transition-all duration-300 z-30 absolute', show ? 'translate-x-0' : '-translate-x-full' )}>
                <div className={'px-4 py-6 h-xxl shadow-toolbar flex items-center'}>
                    {logo && <Image {...logo} />}
                </div>
                {menu && <Menu items={menu} {...props} />}
            </div>
            <div className={clsx('flex-1 transition-all duration-300 ', show ? 'x-pl-drawer' : 'pl-0')}>
                <div className={'px-8 py-6 h-xxl flex items-center'}>
                        <Clickable onClick={handleClick} className={'mr-4'}>
                            <Icon
                                icon={'menu'}
                                className={textClass({ color: props.color, variant: 'light', hoverable: true })}
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

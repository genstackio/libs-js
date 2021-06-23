import { Image, Icon } from '../../atoms';
import { Menu } from '../../molecules';
import { box_color, box_variant, image, menu_item, rich_text, children } from '../../types';
import { ReactNode, useCallback, useState } from 'react';
import clsx from 'clsx';

export function AppLayoutTemplate({ logo, menu, children, toolbar, ...props }: AppLayoutTemplateProps) {
    const [show, setShow] = useState(true);
    const handleClick = useCallback(() => {
        setShow(!show);
    }, [setShow, show]);
    return (
        <div className={'flex h-screen'}>
            <div className={clsx('w-drawer', !show && 'hidden')}>
                <div className={'p-5 h-xxl flex flex-inline shadow-top justify-between items-center'}>
                    <Image className={'bg-auto'} {...logo} />
                    <div onClick={handleClick}>
                        <Icon icon={'apps_outlined'} className={'hover:text-primary'} />
                    </div>
                </div>
                <Menu items={menu} {...props} />
            </div>
            <div className={'w-5/6'}>
                <div className={'p-5 h-xxl'}>
                    {!show && (
                        <div onClick={handleClick}>
                            <Icon icon={'menu'} className={'hover:text-primary'} />
                        </div>
                    )}
                    {toolbar}
                </div>
                <div className={'p-5 h-screen shadow-block bg-[#F8F8F8]'}>{children || ''}</div>
            </div>
        </div>
    );
}

export interface AppLayoutTemplateProps {
    variant?: box_variant;
    color?: box_color;
    logo: image;
    menu: menu_item[];
    title?: rich_text;
    text?: rich_text;
    toolbar: ReactNode;
    children?: children;
}

export default AppLayoutTemplate;

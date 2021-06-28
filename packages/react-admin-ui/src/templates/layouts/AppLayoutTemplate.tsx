import { ReactNode, useCallback, useState } from 'react';
import clsx from 'clsx';
import { Menu } from '../../molecules';
import { Image, Icon } from '../../atoms';
import textClass from '../../utils/textClass';
import { box_color, box_variant, image, menu_item, rich_text, children } from '../../types';

export function AppLayoutTemplate({ logo, menu, children, toolbar, ...props }: AppLayoutTemplateProps) {
    const [show, setShow] = useState(true);
    const handleClick = useCallback(() => {
        setShow(!show);
    }, [setShow, show]);
    return (
        <div className={'flex h-screen'}>
            <div className={clsx('w-drawer', !show && 'hidden')}>
                <div className={'px-8 py-7 h-xxl shadow-toolbar flex justify-between items-center'}>
                    {logo && <Image className={'bg-auto'} {...logo} />}
                    <Icon
                        icon={'apps_outlined'}
                        className={textClass({ color: props.color, variant: 'light', hoverable: true })}
                        onClick={handleClick}
                    />
                </div>
                {menu && <Menu items={menu} {...props} />}
            </div>
            <div className={'flex-1'}>
                <div className={'px-8 py-6 h-xxl'}>
                    {!show && (
                        <div onClick={handleClick}>
                            <Icon
                                icon={'menu'}
                                className={textClass({ color: props.color, variant: 'light', hoverable: true })}
                            />
                        </div>
                    )}
                    {toolbar || ''}
                </div>
                <div className={'h-screen p-4 shadow-inside'}>{children || ''}</div>
            </div>
        </div>
    );
}

export interface AppLayoutTemplateProps {
    variant?: box_variant;
    color?: box_color;
    logo?: image;
    menu?: menu_item[];
    title?: rich_text;
    text?: rich_text;
    toolbar?: ReactNode;
    children?: children;
}

export default AppLayoutTemplate;

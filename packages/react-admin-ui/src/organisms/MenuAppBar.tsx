import { useTranslation } from 'react-i18next';
import Button from '../atoms/Button';
import Row from '../atoms/Row';
import Image from '../atoms/Image';
import { target } from '../types';
import { AsComponent } from '../as';
import { WithColorOfBox, WithLogo } from '../withs';

const defaultMenuItems = [];

export function MenuAppBar({ className, color, logo, menuItems = defaultMenuItems, onLoginClick }: MenuAppBarProps) {
    const { t } = useTranslation();

    return (
        <Row responsive={false} size={'lg-h'} spaced className={className}>
            <Image expand={false} {...logo} className={'flex m-4 max-h-36'} />
            <Row center m={'md'} responsive={false} spaced={14}>
                <nav className={'w-auto hidden md:block'}>
                    <Row responsive={false} spaced={14}>
                        {menuItems.map(({ label, target, active }, index) => (
                            <Button key={index} color={color} onClick={target} label={label} />
                        ))}
                    </Row>
                </nav>
                {!!onLoginClick && (
                    <Button
                        onClick={onLoginClick}
                        variant={'contained'}
                        className={'hidden sm:inline-block'}
                        color={color}
                        label={t('button_login_label')}
                    />
                )}
            </Row>
        </Row>
    );
}

export interface MenuAppBarProps extends AsComponent, WithLogo, WithColorOfBox {
    menuItems?: any[];
    onLoginClick?: target;
}

// noinspection JSUnusedGlobalSymbols
export default MenuAppBar;

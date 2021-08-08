import clsx from 'clsx';
import Button from '../atoms/Button';
import Row from '../atoms/Row';
import { WithColorOfBox, WithLogo } from '../withs';
import { Image } from '../atoms';
import { target } from '../types';
import { useTranslation } from 'react-i18next';
import { AsComponent } from '../as';

export function MenuAppBar({ className, logo, menuItems = [], color, onLoginClick }: MenuAppBarProps) {
    const { t } = useTranslation();
    return (
        <Row className={clsx('h-44', 'justify-between', className)}>
            {logo && <Image {...logo} className={'flex m-4 max-h-36'} expand={false} />}
            <div className={'flex items-center space-x-14 m-4'}>
                <nav className={'w-auto md:hidden'}>
                    <div className={'flex justify-between space-x-14'}>
                        {menuItems.map(({ label, target, active }, index) => (
                            <Button color={color} onClick={target} key={index}>
                                {label}
                            </Button>
                        ))}
                    </div>
                </nav>
                {!!onLoginClick && (
                    <Button onClick={onLoginClick} variant={'contained'} className={'xs:hidden'} color={color}>
                        {t('button_login_label')}
                    </Button>
                )}
            </div>
        </Row>
    );
}

export interface MenuAppBarProps extends AsComponent, WithLogo, WithColorOfBox {
    menuItems?: any[];
    onLoginClick?: target;
}

// noinspection JSUnusedGlobalSymbols
export default MenuAppBar;

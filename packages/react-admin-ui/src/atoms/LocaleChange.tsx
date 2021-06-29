import { useCallback, useState } from 'react';
import clsx from 'clsx';
import Text from './Text';
import bgClass from '../utils/bgClass';
import { box_color, locale } from '../types';
import Popper from '@material-ui/core/Popper';
import { useTranslation } from 'react-i18next';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Icon from './Icon';

export function LocaleChange({ locales = [], color = 'primary' }: LocaleChangeProps) {
    const { i18n, t } = useTranslation() as any;
    const [opened, setOpened] = useState(false);
    const onLocaleChange = useCallback(
        (value) => (e) => {
            e.stopPropagation();
            i18n.changeLanguage(value);
            setOpened(false);
        },
        [setOpened, i18n],
    );
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = useCallback(
        (event) => {
            setOpened(!opened);
            setAnchorEl(anchorEl ? null : event.currentTarget);
        },
        [setOpened, setAnchorEl],
    );
    const handleClickAway = useCallback(() => {
        setOpened(false);
        setAnchorEl(null);
    }, [setOpened, setAnchorEl]);

    return !locales || 1 >= locales.length ? null : (
        <ClickAwayListener onClickAway={handleClickAway}>
            <div className={'cursor-pointer'} onClick={handleClick}>
                <Text text={t('locales_change_value')} />
                <Popper open={opened} anchorEl={anchorEl} placement={'bottom-start'} transition>
                    <div className={'max-w-xxs divide-y bg-white'}>
                        {locales.map(({ value, language }, index) => (
                            <div
                                className={clsx(
                                    bgClass({ color: color, variant: 'outlined', hoverable: true }),
                                    'flex items-center space-x-2 p-3 cursor-pointer',
                                )}
                                key={index}
                                onClick={onLocaleChange(value) as any}
                            >
                                <Icon icon={'flag'} />
                                {language && <Text text={language} variant={'description'} />}
                            </div>
                        ))}
                    </div>
                </Popper>
            </div>
        </ClickAwayListener>
    );
}

export interface LocaleChangeProps {
    locales?: locale[];
    color?: box_color;
}

export default LocaleChange;

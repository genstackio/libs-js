import { useCallback, useState } from 'react';
import clsx from 'clsx';
import Text from './Text';
import FlagIcon from './FlagIcon';
import bgClass from '../utils/bgClass';
import Popper from '@material-ui/core/Popper';
import { useTranslation } from 'react-i18next';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { WithColorOfBox, WithLocales } from '../withs';
import shortenLocale from '../utils/shortenLocale';
import { AsComponent } from '../as';

export function LocaleChange({ className, locales = [], color = 'primary' }: LocaleChangeProps) {
    const { i18n } = useTranslation() as any;
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
            <div className={clsx('cursor-pointer flex items-center space-x-2', className)} onClick={handleClick}>
                <FlagIcon locale={i18n.language} />
                <Text text={shortenLocale(i18n.language)} variant={'subsection'} />
                <Popper open={opened} anchorEl={anchorEl} placement={'bottom-start'} transition>
                    <div className={'max-w-xxs divide-y bg-clear mt-4'}>
                        {locales.map(({ value, language }, index) => (
                            <div
                                className={clsx(
                                    bgClass({ color: color, variant: 'outlined', hoverable: true }),
                                    'flex items-center space-x-2 p-3 cursor-pointer',
                                )}
                                key={index}
                                onClick={onLocaleChange(value) as any}
                            >
                                <FlagIcon locale={value} />
                                <Text text={language} variant={'subsection'} />
                            </div>
                        ))}
                    </div>
                </Popper>
            </div>
        </ClickAwayListener>
    );
}

export interface LocaleChangeProps extends AsComponent, WithColorOfBox, WithLocales {}

// noinspection JSUnusedGlobalSymbols
export default LocaleChange;

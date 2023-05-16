import { useCallback, useState } from 'react';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import Text from './Text';
import Div from './Div';
import Row from './Row';
import FlagIcon from './FlagIcon';
import Popper from '@material-ui/core/Popper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import bgClass from '../mappings/bgs';
import shortenLocale from '../utils/shortenLocale';
import { AsComponent } from '../as';
import { WithColorOfBox, WithLocales } from '../withs';
import stopPrevent from '../utils/stopPrevent';

const defaultLocales = [];

export function LocaleChange({ className, color = 'primary', locales = defaultLocales }: LocaleChangeProps) {
    const { i18n } = useTranslation() as any;
    const [opened, setOpened] = useState(false);
    const onLocaleChange = useCallback(
        (value) => (e) => {
            stopPrevent(e);
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
            <div className={className} onClick={handleClick}>
                {' '}
                {/* native div is required here to be injected the ref from ClickAwayListener */}
                <Row responsive={false} pointer spaced={2}>
                    <FlagIcon locale={i18n.language} />
                    <Text text={shortenLocale(i18n.language)} variant={'subsection'} />
                    <Popper anchorEl={anchorEl} open={opened} placement={'bottom-start'} transition>
                        <Div mt={'md'} className={'max-w-xxs divide-y bg-clear'}>
                            {locales.map(({ value, language }, index) => (
                                <Div
                                    flex
                                    key={index}
                                    pointer
                                    onClick={onLocaleChange(value) as any}
                                    className={clsx(
                                        bgClass({ color: color, variant: 'outlined', hoverable: true }),
                                        'space-x-2 p-3',
                                    )}
                                >
                                    <FlagIcon locale={value} />
                                    <Text text={language} variant={'subsection'} />
                                </Div>
                            ))}
                        </Div>
                    </Popper>
                </Row>
            </div>
        </ClickAwayListener>
    );
}

export interface LocaleChangeProps extends AsComponent, WithColorOfBox, WithLocales {}

// noinspection JSUnusedGlobalSymbols
export default LocaleChange;

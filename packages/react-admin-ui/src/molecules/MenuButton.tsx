import { useCallback, useState } from 'react';
import Icon from '../atoms/Icon';
import Text from '../atoms/Text';
import Image from '../atoms/Image';
import Popper from '@material-ui/core/Popper';
import MenuButtonWidget from './MenuButtonWidget';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { box_color, image, menu_button_item, rich_text } from '../types';

export function MenuButton({ image, label, description, items = [], color }: MenuButtonProps) {
    const [opened, setOpened] = useState(false);
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

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <div className={'flex items-center space-x-4 cursor-pointer'} onClick={handleClick}>
                {image && <Image {...image} corner={'rounded-xsmall'} />}
                <div>
                    {label && <Text text={label} variant={'description'} />}
                    {description && (
                        <div className={'flex items-center'}>
                            <Text text={description} variant={'small'} />
                            <Icon icon={'expand_more'} />
                        </div>
                    )}
                </div>
                <Popper open={opened} anchorEl={anchorEl} placement={'bottom-start'} transition>
                    <MenuButtonWidget items={items} color={color} />
                </Popper>
            </div>
        </ClickAwayListener>
    );
}

export interface MenuButtonProps {
    image?: image;
    label?: rich_text;
    description?: rich_text;
    items?: menu_button_item[];
    color?: box_color;
}

export default MenuButton;

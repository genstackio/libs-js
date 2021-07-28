import clsx from 'clsx';
import Icon from '../atoms/Icon';
import Text from '../atoms/Text';
import Image from '../atoms/Image';
import Avatar from '../atoms/Avatar';
import MenuButtonWidget from './MenuButtonWidget';
import { menu_button_item, flag } from '../types';
import Expandable from './Expandable';
import { WithBoxColor, WithClassName, WithDescription, WithImage, WithLabel } from '../withs';

export function MenuButton({
    className,
    label,
    image,
    description,
    items = [],
    color,
    avatar = false,
}: MenuButtonProps) {
    return (
        <Expandable
            className={clsx('space-x-4', className)}
            expandedChildren={<MenuButtonWidget items={items} color={color} />}
        >
            {(opened) => (
                <>
                    {!image && avatar && 'string' === typeof label && (
                        <Avatar shape={'rounded'} size={'xsm'} name={label} />
                    )}
                    {!!image && <Image {...image} corner={'rounded-xsmall'} className={'w-10 h-10'} />}
                    <div className={'sm:hidden w-auto'}>
                        <Text text={label} variant={'description'} className={'w-auto whitespace-nowrap'} />
                        {description && (
                            <div className={'flex items-center w-auto'}>
                                <Text text={description} variant={'small'} />
                                <Icon icon={opened ? 'expand_less' : 'expand_more'} />
                            </div>
                        )}
                    </div>
                </>
            )}
        </Expandable>
    );
}

export interface MenuButtonProps extends WithClassName, WithImage, WithLabel, WithDescription, WithBoxColor {
    items?: menu_button_item[];
    avatar?: flag;
}

export default MenuButton;

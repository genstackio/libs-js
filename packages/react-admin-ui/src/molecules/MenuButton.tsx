import clsx from 'clsx';
import Icon from '../atoms/Icon';
import Text from '../atoms/Text';
import Image from '../atoms/Image';
import MenuButtonWidget from './MenuButtonWidget';
import { menu_button_item } from '../types';
import Expandable from './Expandable';
import { WithBoxColor, WithClassName, WithDescription, WithImage, WithLabel } from '../withs';

export function MenuButton({ className, image, label, description, items = [], color }: MenuButtonProps) {
    return (
        <Expandable
            className={clsx('space-x-4', className)}
            expandedChildren={<MenuButtonWidget items={items} color={color} />}
        >
            {(opened) => (
                <>
                    {image && <Image {...image} corner={'rounded-xsmall'} className={'w-10 h-10'} />}
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
}

export default MenuButton;

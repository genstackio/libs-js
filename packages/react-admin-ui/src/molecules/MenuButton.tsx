import clsx from 'clsx';
import Icon from '../atoms/Icon';
import Text from '../atoms/Text';
import Image from '../atoms/Image';
import MenuButtonWidget from './MenuButtonWidget';
import { box_color, class_name, image, menu_button_item, rich_text } from '../types';
import Expandable from './Expandable';

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

export interface MenuButtonProps {
    className?: class_name;
    image?: image;
    label?: rich_text;
    description?: rich_text;
    items?: menu_button_item[];
    color?: box_color;
}

export default MenuButton;

import clsx from 'clsx';
import Div from '../atoms/Div';
import Icon from '../atoms/Icon';
import Text from '../atoms/Text';
import Image from '../atoms/Image';
import Avatar from '../atoms/Avatar';
import Expandable from './Expandable';
import MenuButtonWidget from './MenuButtonWidget';
import { flag } from '../types';
import { AsComponent } from '../as';
import { WithColorOfBox, WithDescription, WithImage, WithLabel, WithItemsOfMenuButton } from '../withs';

export function MenuButton({
    avatar = false,
    className,
    color,
    description,
    image,
    label,
    items = [],
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
                    {!!image && <Image {...image} corner={'rounded-xsmall'} expand={false} className={'w-10 h-10'} />}
                    <Div inline tablet desktop className={'w-auto'}>
                        <Text text={label} variant={'description'} className={'w-auto whitespace-nowrap'} />
                        {description && (
                            <Div flex center className={'w-auto'}>
                                <Text text={description} variant={'small'} />
                                <Icon icon={opened ? 'expand_less' : 'expand_more'} />
                            </Div>
                        )}
                    </Div>
                </>
            )}
        </Expandable>
    );
}

export interface MenuButtonProps
    extends AsComponent,
        WithImage,
        WithLabel,
        WithDescription,
        WithColorOfBox,
        WithItemsOfMenuButton {
    avatar?: flag;
}

// noinspection JSUnusedGlobalSymbols
export default MenuButton;

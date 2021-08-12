import Text from './Text';
import boxClass from '../utils/boxClass';
import Button from './Button';
import Block from './Block';
import { BoxProvider } from '@genstackio/react-contexts/lib/contexts/BoxContext';
import { pricing_item } from '../types';
import clsx from 'clsx';
import { WithClassName } from '../withs';

export function PricingItem({ item, className }: PricingItemProps) {
    return (
        <Block
            image={item.image}
            contentClassName={'space-y-3 flex justify-center items-center flex-col pr-4 pl-4'}
            className={className}
        >
            <div className={'uppercase'}>
                <Text text={item?.name} variant={'title4'} />
            </div>
            <div
                className={clsx(
                    boxClass({ color: item.color, variant: item.variant }),
                    'flex rounded-full h-32 w-32 items-center justify-center',
                )}
            >
                <BoxProvider value={{ color: item.color, variant: item.variant }}>
                    <Text text={item.currency} variant={'description'} />
                    <Text text={`${item.price}`} variant={'title1'} />
                    <Text text={item.period} variant={'subtitle'} />
                </BoxProvider>
            </div>
            <div className={'flex flex-col justify-center space-y-3'}>
                {item.features &&
                    item.features.map(({ title }, index) => <Text key={index} text={title} variant={'subtitle'} />)}
            </div>
            <div className={'uppercase'}>
                <Button variant={item.variant} color={item.color} onClick={item.onClick}>
                    {item.label}
                </Button>
            </div>
        </Block>
    );
}

export interface PricingItemProps extends WithClassName {
    item: pricing_item;
}

export default PricingItem;

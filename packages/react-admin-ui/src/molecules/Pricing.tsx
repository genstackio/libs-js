import clsx from 'clsx';
import { Block, Button, Text } from '../atoms';
import boxClass from '../utils/boxClass';
import { class_name, pricing_item } from '../types';

export function Pricing({ className, items = [] }: PricingProps) {
    return (
        <div className={clsx('flex inline', className)}>
            {items.map((item, index) => (
                <Block
                    key={index}
                    image={item.image}
                    contentClassName={'space-y-3 flex justify-center items-center flex-col pr-4 pl-4'}
                >
                    <div key={index} className={'uppercase'}>
                        {item && <Text text={item.name} variant={'title4'} />}
                    </div>
                    <div
                        className={clsx(
                            boxClass({ color: item.color, variant: item.variant }),
                            'flex rounded-full h-32 w-32 items-center justify-center',
                        )}
                    >
                        <Text text={item.currency} variant={'description'} />
                        <Text text={`${item.price}`} variant={'title1'} />
                        <Text text={item.period} variant={'subtitle'} />
                    </div>
                    <div className={'flex flex-col justify-center space-y-3'}>
                        {item.features &&
                            item.features.map(({ title }, index) => (
                                <Text key={index} text={title} variant={'subtitle'} />
                            ))}
                    </div>
                    <div className={'uppercase'}>
                        <Button variant={item.variant} color={item.color} onClick={item.onClick}>
                            {item.label}
                        </Button>
                    </div>
                </Block>
            ))}
        </div>
    );
}

export interface PricingProps {
    className?: class_name;
    items: pricing_item[];
}

export default Pricing;

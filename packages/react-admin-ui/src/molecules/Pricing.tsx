import clsx from "clsx";
import {Block, Button, Text} from '../atoms';
import colorClass from "../utils/colorClass";
import {box_color, box_variant, image, target} from "../types";

export function Pricing({items}: PricingProps) {
    return (
        <div className={'flex inline'}>
            {items && items.map((item, index) => (
                <Block image={item.image} classes={{content: 'space-y-3 flex justify-center items-center flex-col pr-4 pl-4'}}>
                    <div key={index} className={'uppercase'}>
                        {item && item.name && <Text text={item.name} variant='title4'/>}
                    </div>
                    <div className={clsx(colorClass({color: item.color, variant: item.variant}), 'flex rounded-full h-32 w-32 items-center justify-center')}>
                        <Text text={item.currency} variant='description'/>
                        <Text text={`${item.price}`} variant='title1'/>
                        <Text text={item.period} variant='subtitle'/>
                    </div>
                    <div className={'flex flex-col justify-center space-y-3'}>
                        {item.features && item.features.map(({title}, index) => (
                            <Text key={index} text={title} variant='subtitle'/>
                        ))}
                    </div>
                    <div className={'uppercase'}>
                        <Button variant={item.variant} color={item.color} onClick={item.onClick}>{item.label}</Button>
                    </div>
                </Block>
            ))}
        </div>
    );
}

export interface PricingProps {
    items: {
        color?: box_color,
        currency?: string,
        features?: {
            title?: string
        }[],
        image?: image,
        label?: string,
        name: string,
        onClick: target,
        period: string,
        price: number,
        variant?: box_variant,
    }[],
}

export default Pricing
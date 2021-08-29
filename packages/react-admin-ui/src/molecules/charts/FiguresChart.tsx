import clsx from 'clsx';
import Items from '../../atoms/Items';
import { FiguresChartItem } from '../../atoms/FiguresChartItem';
import { AsComponent } from '../../as';
import { WithItemsOfFiguresChart } from '../../withs';

export function FiguresChart({ className, items = [] }: FiguresChartProps) {
    return (
        <Items
            container
            containerClassName={clsx('grid grid-cols-1 sm:grid-cols-4 divide-x-0 sm:divide-x', className)}
            component={FiguresChartItem}
            items={items}
        />
    );
}

export interface FiguresChartProps extends AsComponent, WithItemsOfFiguresChart {}

// noinspection JSUnusedGlobalSymbols
export default FiguresChart;

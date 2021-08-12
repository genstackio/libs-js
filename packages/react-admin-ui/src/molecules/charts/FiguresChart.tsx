import clsx from 'clsx';
import { ApexOptions } from 'apexcharts';
import { box_color } from '../../types';
import { AsComponent } from '../../as';
import { FiguresChartItem } from '../../atoms/FiguresChartItem';

export function FiguresChart({ className, items = [] }: FiguresChartProps) {
    return (
        <>
            {items && (
                <div className={clsx('grid grid-cols-4 xs:grid-cols-1 divide-x xs:divide-x-0', className)}>
                    {items.map((item, index) => (
                        <FiguresChartItem key={index} {...item} />
                    ))}
                </div>
            )}
        </>
    );
}

export interface FiguresChartProps extends AsComponent {
    items?: {
        color?: box_color;
        name?: string;
        options?: ApexOptions;
        series?: {
            data?: number[];
        }[];
        value?: number;
    }[];
}

// noinspection JSUnusedGlobalSymbols
export default FiguresChart;

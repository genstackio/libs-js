import { useMemo } from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import tailwindConfig from '../../../tailwind.config';
import { AsComponent } from '../../as';
import { WithBox } from '../../withs';

const tailwindChartColors = tailwindConfig.theme.extend.colors;
const defaultOptions: ApexOptions = {
    chart: {
        toolbar: {
            show: false,
        },
        type: 'treemap',
    },
    legend: {
        show: false,
    },
    plotOptions: {
        treemap: {
            distributed: true,
            enableShades: false,
        },
    },
};

export function TreeMapChart({ className, color, values = [] }: TreeMapChartProps) {
    const options = useMemo(
        () => ({
            ...defaultOptions,
            colors: !color ? Object.values(tailwindChartColors) : [tailwindChartColors[`${color}`]],
        }),
        [color],
    );
    const data: { x: string; y: number }[] = useMemo(
        () =>
            values.reduce((acc, data) => {
                acc.push({ x: data.label! as any, y: Math.min(Math.max(0, data.value), 10) as number } as any);
                return acc;
            }, [] as { x: string; y: number }[]),
        [values],
    );
    const newData = useMemo(() => [{ data: data }], [data]);

    return <Chart type={'treemap'} options={options} series={newData} height="350" width="800" className={className} />;
}

export interface TreeMapChartProps extends AsComponent, WithBox {
    values?: {
        label: string;
        value: number;
    }[];
}

// noinspection JSUnusedGlobalSymbols
export default TreeMapChart;

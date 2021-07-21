import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import tailwindConfig from '../../../tailwind.config';
import { WithBox, WithClassName } from '../../withs';

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
    const options = {
        ...defaultOptions,
        colors: !color ? Object.values(tailwindChartColors) : [tailwindChartColors[`${color}`]],
    };
    const data: { x: string; y: number }[] = values.reduce((acc, data) => {
        acc.push({ x: data.label!, y: Math.min(Math.max(0, data.value), 10) });
        return acc;
    }, [] as { x: string; y: number }[]);
    const newData = [{ data: data }];
    return <Chart type={'treemap'} options={options} series={newData} height="350" width="800" className={className} />;
}

export interface TreeMapChartProps extends WithClassName, WithBox {
    values?: {
        label: string;
        value: number;
    }[];
}

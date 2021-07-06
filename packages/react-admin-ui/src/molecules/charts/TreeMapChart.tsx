import Chart from 'react-apexcharts';
import {ApexOptions} from 'apexcharts';
import {box_color, box_variant, class_name} from '../../types';
import clsx from 'clsx';
import tailwindConfig from '../../../tailwind.config';


const tailwindChartColors = tailwindConfig.theme.extend.colors;
const defaultOptions: ApexOptions = {
    chart: {
        toolbar: {
            show: false,
        },
        type: "treemap"
    },
    legend: {
        show: false
    },
    plotOptions: {
        treemap: {
            distributed: true,
            enableShades: false,
        }
    },
};


export function TreeMapChart({
                                 className,
                                 color,
                                 values = [],
                             }: TreeMapChartProps) {
    const options = {
        ...defaultOptions,
        colors: !color ? Object.values(tailwindChartColors) : [tailwindChartColors[`${color}`]],
    }
    console.log(options)
    const data: { x: string; y: number }[] = values.reduce((acc, data) => {
        acc.push({x: data.label!, y: Math.min(Math.max(0, data.value), 10)});
        return acc;
    }, [] as { x: string, y: number }[]);
    const newData = [{data: data}]
    return <Chart type={'treemap'} options={options} series={newData} height='350' width='800' className={clsx(className)}/>;
}

export interface TreeMapChartProps {
    className?: class_name;
    color?: box_color;
    values?: {
        label: string;
        value: number;
    }[];
    variant?: box_variant;
}

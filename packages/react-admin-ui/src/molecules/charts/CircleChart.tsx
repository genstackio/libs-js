import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import tailwindConfig from '../../../tailwind.config';
import { box_color, box_variant, chart_series, class_name } from '../../types';
import clsx from 'clsx';

const tailwindChartColors = tailwindConfig.theme.extend.chartColors;

const defaultOptions: ApexOptions = {
    chart: {
        toolbar: {
            show: false,
        },
    },
    dataLabels: {
        enabled: false,
    },
    legend: {
        show: true,
    },
};

export function CircleChart({ className, color = 'primary', series, variant = 'filled' }: CircleChartProps) {
    const col = `${variant}_${color}`;
    const options = { ...defaultOptions, colors: tailwindChartColors[col] };

    return <Chart type={'radialBar'} options={options} series={series} className={clsx(className)} />;
}

export interface CircleChartProps {
    className?: class_name;
    color?: box_color;
    series: chart_series;
    variant?: box_variant;
}

export default CircleChart;

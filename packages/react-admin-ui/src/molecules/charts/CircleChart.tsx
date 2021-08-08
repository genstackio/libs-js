import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import tailwindConfig from '../../../tailwind.config';
import { WithBox, WithSeries } from '../../withs';
import { AsComponent } from '../../as';

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

export function CircleChart({ className, color = 'primary', series = [], variant = 'filled' }: CircleChartProps) {
    const options = { ...defaultOptions, colors: tailwindChartColors[`${variant}_${color}`] };

    return <Chart type={'radialBar'} options={options} series={series} className={className} />;
}

export interface CircleChartProps extends AsComponent, WithBox, WithSeries {}

// noinspection JSUnusedGlobalSymbols
export default CircleChart;

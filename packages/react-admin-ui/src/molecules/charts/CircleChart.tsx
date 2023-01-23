import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import tailwindConfig from '../../../tailwind.config';
import { AsComponent } from '../../as';
import { WithBox, WithSeries } from '../../withs';
import { useMemo } from 'react';

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

const defaultSeries = [];

export function CircleChart({
    className,
    color = 'primary',
    series = defaultSeries,
    variant = 'filled',
}: CircleChartProps) {
    const options = useMemo(
        () => ({ ...defaultOptions, colors: tailwindChartColors[`${variant}_${color}`] }),
        [defaultOptions, tailwindChartColors, variant, color],
    );

    return <Chart options={options} series={series} type={'radialBar'} className={className} />;
}

export interface CircleChartProps extends AsComponent, WithBox, WithSeries {}

// noinspection JSUnusedGlobalSymbols
export default CircleChart;

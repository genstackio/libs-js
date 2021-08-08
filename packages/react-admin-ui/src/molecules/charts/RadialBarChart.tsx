import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import tailwindConfig from '../../../tailwind.config';
import { WithBox, WithLabels, WithSeries, WithTitleAsString } from '../../withs';
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
        show: false,
    },
    plotOptions: {
        radialBar: {
            dataLabels: {
                value: {
                    fontSize: '1.5em',
                },
                total: {
                    fontSize: '2em',
                    show: true,
                    formatter: function (w) {
                        return w.globals.seriesTotals.reduce((a, b) => {
                            return a + b;
                        }, 0);
                    },
                },
            },
        },
    },
};

export function RadialBarChart({
    className,
    color = 'primary',
    labels,
    series,
    title,
    variant = 'filled',
}: RadialBarChartProps) {
    const col = `${variant}_${color}`;
    const options = {
        ...defaultOptions,
        colors: tailwindChartColors[col],
        plotOptions: { ...(defaultOptions.plotOptions || {}) },
        labels: labels,
    };
    options!.plotOptions!.radialBar!.dataLabels!.total!.label = title;

    return <Chart type={'radialBar'} options={options} series={series} className={className} />;
}

export interface RadialBarChartProps extends AsComponent, WithTitleAsString, WithBox, WithSeries, WithLabels {}

// noinspection JSUnusedGlobalSymbols
export default RadialBarChart;

import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import tailwindConfig from '../../../tailwind.config';
import { AsComponent } from '../../as';
import { WithBox, WithLabels, WithSeries } from '../../withs';
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
        show: false,
    },
    grid: {
        show: false,
    },
    xaxis: {
        labels: {
            show: true,
        },
        axisBorder: {
            show: true,
        },
        axisTicks: {
            show: true,
        },
    },
    yaxis: {
        show: false,
    },
    stroke: {
        show: false,
    },
    plotOptions: {
        bar: {
            borderRadius: 7,
            columnWidth: '30%',
        },
    },
    responsive: [
        {
            breakpoint: 900,
            options: {
                plotOptions: {
                    bar: {
                        borderRadius: 4,
                        columnWidth: '30%',
                    },
                },
            },
        },
        {
            breakpoint: 300,
            options: {
                plotOptions: {
                    bar: {
                        borderRadius: 1,
                        columnWidth: '30%',
                    },
                },
            },
        },
    ],
};

const defaultSeries = [];

export function BarChart({
    className,
    color = 'primary',
    labels,
    series = defaultSeries,
    variant = 'filled',
}: BarChartProps) {
    const col = `${variant}_${color}`;
    const options = useMemo(
        () => ({ ...defaultOptions, colors: tailwindChartColors[col], labels: labels }),
        [defaultOptions, tailwindChartColors, labels],
    );
    const newData: { data: number[] }[] = useMemo(
        () =>
            series.reduce((acc, data) => {
                acc.push({ data: data } as any);
                return acc;
            }, [] as { data: number[] }[]),
        [series],
    );

    return <Chart height={'250px'} options={options} series={newData} type={'bar'} className={className} />;
}

export interface BarChartProps extends AsComponent, WithBox, WithSeries, WithLabels {}

// noinspection JSUnusedGlobalSymbols
export default BarChart;

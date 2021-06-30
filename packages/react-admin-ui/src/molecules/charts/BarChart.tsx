import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import tailwindConfig from '../../../tailwind.config';
import { box_color, box_variant, class_name } from '../../types';
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

export function BarChart({ className, color = 'primary', labels, series, variant = 'filled' }: BarChartProps) {
    const col = `${variant}_${color}`;
    const options = { ...defaultOptions, colors: tailwindChartColors[col], labels: labels };

    const newData: { data: number[] }[] = series.reduce((acc, data) => {
        acc.push({ data: data });
        return acc;
    }, [] as { data: number[] }[]);

    return <Chart type="bar" options={options} series={newData} height={'250px'} className={clsx(className)} />;
}

export interface BarChartProps {
    className?: class_name;
    color?: box_color;
    labels?: string[];
    series: number[][];
    variant?: box_variant;
}

export default BarChart;

import { useMemo } from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import tailwindConfig from '../../../tailwind.config';
import { flag } from '../../types';
import { AsComponent } from '../../as';
import { WithBox, WithLabels } from '../../withs';

const tailwindTextColors = tailwindConfig.theme.extend.textColors;
const tailwindChartColors = tailwindConfig.theme.extend.chartColors;
const tailwindChartBgColors = tailwindConfig.theme.extend.chartBgColors;
const defaultOptions: ApexOptions = {
    legend: {
        show: true,
    },
    stroke: {
        show: true,
        width: 3,
    },
    xaxis: {
        labels: {
            style: {
                fontSize: '16px',
            },
        },
    },
    markers: {
        size: 6,
        colors: ['#EEE'],
        strokeWidth: 3,
        hover: {
            size: 10,
        },
    },
    responsive: [
        {
            breakpoint: 700,
            options: {
                stroke: {
                    width: 2,
                },
                xaxis: {
                    labels: {
                        style: {
                            fontSize: '10px',
                        },
                    },
                },
                markers: {
                    size: 4,
                    strokeWidth: 2,
                    hover: {
                        size: 7,
                    },
                },
            },
        },
    ],
};

const defaultLabels = [];
const defaultSeries = [];

export function RadarChart({
    className,
    color = 'primary',
    isMenu = true,
    labels = defaultLabels,
    series = defaultSeries,
    variant = 'filled',
}: RadarChartProps) {
    const options = useMemo(() => {
        const col = `${variant}_${color}`;
        const o = {
            ...defaultOptions,
            chart: { toolbar: { show: isMenu } },
            labels: labels,
            colors: tailwindChartColors[col],
            plotOptions: { radar: { polygons: { fill: { colors: tailwindChartBgColors[col] } } } },
            markers: { ...(defaultOptions.markers || {}) },
            xaxis: { ...(defaultOptions.xaxis || {}) },
        };
        o.markers.strokeColors = tailwindChartColors[col];
        const buffer: string[] = [];
        if (series && series[0] && series[0].data) {
            for (let n = 0; n < series[0].data.length; n++) {
                buffer.push(tailwindTextColors[`${col}`]);
                o.xaxis.labels!.style!.colors = buffer;
            }
        }
        return o;
    }, [isMenu, labels, variant, color]);

    return <Chart options={options} series={series} type={'radar'} className={className} />;
}

export interface RadarChartProps extends AsComponent, WithBox, WithLabels {
    isMenu?: flag;
    series?: {
        data?: number[];
        name?: string;
    }[];
}

// noinspection JSUnusedGlobalSymbols
export default RadarChart;

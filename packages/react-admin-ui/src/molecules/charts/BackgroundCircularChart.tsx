import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import tailwindConfig from '../../../tailwind.config';
import { summary_item } from '../../types';
import Summaries from '../Summaries';
import { WithColorOfBox, WithClassName, WithImage } from '../../withs';

const tailwindColors = tailwindConfig.theme.extend.colors;

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
            hollow: {
                margin: 0,
                size: '70%',
            },
            inverseOrder: true,
            startAngle: 0,
            endAngle: 360,
            dataLabels: {
                name: {
                    show: false,
                },
                value: {
                    show: true,
                    fontSize: '2em',
                    fontWeight: 400,
                    formatter: function (val) {
                        return val + '%';
                    },
                },
            },
        },
    },
    fill: {
        type: 'image',
        image: {
            width: 350,
        },
    },
    stroke: {
        lineCap: 'round',
    },
};

export function BackgroundCircularChart({
    className,
    color = 'dark',
    value,
    image,
    summaries,
}: BackgroundCircularChartProps) {
    const options = {
        ...defaultOptions,
        colors: [tailwindColors[color]],
        plotOptions: { ...(defaultOptions.plotOptions || {}) },
        fill: { ...(defaultOptions.fill || {}) },
    };
    options.plotOptions.radialBar!.dataLabels!.value!.color = tailwindColors[color];
    image?.url && (options.fill!.image!.src = image.url);

    return (
        <>
            <Chart type={'radialBar'} options={options} series={[[value]]} className={className} />
            {summaries && <Summaries items={summaries} />}
        </>
    );
}

export interface BackgroundCircularChartProps extends WithClassName, WithColorOfBox, WithImage {
    value: number;
    summaries?: summary_item[];
}

export default BackgroundCircularChart;

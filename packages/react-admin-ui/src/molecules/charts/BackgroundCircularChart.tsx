import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import tailwindConfig from '../../../tailwind.config';
import { summary_item } from '../../types';
import Summaries from '../Summaries';
import { AsComponent } from '../../as';
import { WithColorOfBox, WithImage, WithValueAsNumber } from '../../withs';

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
    image,
    summaries,
    value,
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
            <Chart options={options} series={[[value]]} type={'radialBar'} className={className} />
            {summaries && <Summaries items={summaries} />}
        </>
    );
}

export interface BackgroundCircularChartProps
    extends AsComponent,
        WithColorOfBox,
        WithImage,
        Required<WithValueAsNumber> {
    summaries?: summary_item[];
}

// noinspection JSUnusedGlobalSymbols
export default BackgroundCircularChart;

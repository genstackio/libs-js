import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { box_color, rich_text } from '../../types';
import tailwindConfig from '../../../tailwind.config';
import Text from '../../atoms/Text';
import { lighten } from '@material-ui/core/styles';

const tailwindColors = tailwindConfig.theme.extend.colors;

const defaultOptions: ApexOptions = {
    chart: {
        toolbar: {
            show: false,
        },
    },
    legend: {
        show: false,
    },
    grid: {
        show: false,
    },
    plotOptions: {
        radialBar: {
            startAngle: -135,
            endAngle: 135,
            inverseOrder: true,
            hollow: {
                margin: 40,
                size: '80%',
                background: '#f7edff',
            },
            track: {
                background: '#f7f0f0',
                opacity: 0.5,
            },
            dataLabels: {
                name: {
                    fontSize: '1.5em',
                },
                value: {
                    fontSize: '1em',
                    fontWeight: 600,
                    show: true,
                    color: '#000000',
                },
            },
        },
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'light',
            shadeIntensity: 0.15,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100],
            type: 'horizontal',
        },
    },
    stroke: {
        dashArray: 24,
    },
};

export function RateChart({ color = 'primary', overline, subtitle, title, value }: RateChartProps) {
    const options = {
        ...defaultOptions,
        colors: [tailwindColors[color]],
        labels: [title],
        plotOptions: { ...(defaultOptions.plotOptions || {}) },
    };
    options.plotOptions.radialBar!.dataLabels!.name!.color = tailwindColors[color];
    options.plotOptions.radialBar!.hollow!.background = lighten(tailwindColors[color], 0.9);
    options.fill!.gradient!.gradientToColors = [lighten(tailwindColors[color], 0.5)];
    return (
        <div>
            <Chart type={'radialBar'} options={options} series={[[value]]} height={'450px'} />
            <div className={'text-center mt-2'}>
                <Text text={subtitle} color={color} variant={'title6'} />
                <Text text={overline} />
            </div>
        </div>
    );
}

export interface RateChartProps {
    color?: box_color;
    overline: rich_text;
    subtitle: rich_text;
    title: string;
    value: number;
}

export default RateChart;

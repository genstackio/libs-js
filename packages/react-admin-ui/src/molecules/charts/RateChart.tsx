import { useMemo } from 'react';
import tailwindConfig from '../../../tailwind.config';
import Div from '../../atoms/Div';
import Text from '../../atoms/Text';
import Chart, { ChartOptions } from '../../atoms/Chart';
import { lighten } from '@material-ui/core/styles';
import { AsComponent } from '../../as';
import { WithColorOfBox, WithSubtitle, WithOverline, WithTitleAsString, WithValueAsNumber } from '../../withs';

const tailwindColors = tailwindConfig.theme.extend.colors;
const defaultOptions: ChartOptions = {
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

export function RateChart({ className, color = 'primary', overline, subtitle, title, value }: RateChartProps) {
    const options = useMemo(() => {
        const o = {
            ...defaultOptions,
            colors: [tailwindColors[color]],
            labels: [title],
            plotOptions: { ...(defaultOptions.plotOptions || {}) },
        };
        o.plotOptions.radialBar!.dataLabels!.name!.color = tailwindColors[color];
        o.plotOptions.radialBar!.hollow!.background = lighten(tailwindColors[color], 0.9);
        o.fill!.gradient!.gradientToColors = [lighten(tailwindColors[color], 0.5)];
        return o;
    }, [color, title]);
    const series = useMemo(() => [[value]], [value]);

    return (
        <div className={className}>
            <Chart height={'450px'} options={options} series={series} type={'radialBar'} />
            <Div p={'sm-t'}>
                <Text color={color} text={subtitle} center variant={'title6'} />
                <Text center text={overline} />
            </Div>
        </div>
    );
}

export interface RateChartProps
    extends AsComponent,
        WithColorOfBox,
        Required<WithTitleAsString>,
        WithSubtitle,
        WithOverline,
        Required<WithValueAsNumber> {}

// noinspection JSUnusedGlobalSymbols
export default RateChart;

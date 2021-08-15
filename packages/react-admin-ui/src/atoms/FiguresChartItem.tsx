import Div from './Div';
import Text from './Text';
import Chart from './Chart';
import Column from './Column';
import { WithName, WithValue, WithColorOfBox, WithSeries } from '../withs';

const defaultOptions = {
    chart: {
        toolbar: {
            show: false,
        },
    },
    tooltip: {
        custom: function ({ series, seriesIndex, dataPointIndex }) {
            return '<div class="arrow_box">' + '<span>' + series[seriesIndex][dataPointIndex] + '</span>' + '</div>';
        },
    },
    plotOptions: {
        bar: {
            columnWidth: '50%',
            colors: {
                backgroundBarColors: ['DCDCDC', 'DCDCDC', 'DCDCDC', 'DCDCDC'],
                backgroundBarOpacity: 0.1,
            },
        },
    },
    stroke: {
        show: true,
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
            show: false,
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
    },
    yaxis: {
        show: false,
    },
};

export function FiguresChartItem({ color, name, series, value }: FiguresChartItemProps) {
    return (
        <Column p={'xl'}>
            <Chart options={defaultOptions} series={series} type={'bar'} />
            <Div center>
                <Text color={color} text={String(value)} variant={'title6'} />
                <Text color={color} text={name} variant={'description'} />
            </Div>
        </Column>
    );
}

export interface FiguresChartItemProps extends WithColorOfBox, WithValue, WithName, WithSeries {}

// noinspection JSUnusedGlobalSymbols
export default FiguresChartItem;

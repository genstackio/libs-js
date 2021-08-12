import Text from './Text';
import Chart from 'react-apexcharts';
import { WithName, WithValue, WithColorOfBox } from '../withs';

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

export function FiguresChartItem({ color, value, name, series }: FiguresChartItemProps) {
    return (
        <div className={'p-6 flex-1 flex items-center space-x-2'}>
            <Chart type={'bar'} width={'80px'} height={'80px'} options={defaultOptions} series={series} />
            <div>
                <Text text={`${value}`} color={color} variant={'title6'} />
                <Text text={name} color={color} variant={'description'} />
            </div>
        </div>
    );
}

export interface FiguresChartItemProps extends WithColorOfBox, WithValue, WithName {
    series?: {
        data?: number[];
    }[];
}

// noinspection JSUnusedGlobalSymbols
export default FiguresChartItem;

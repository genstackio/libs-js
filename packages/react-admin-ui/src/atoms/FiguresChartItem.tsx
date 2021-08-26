import Text from './Text';
import Chart from 'react-apexcharts';
import { WithName, WithValue, WithColorOfBox } from '../withs';
import { text_align } from '../types';

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

export function FiguresChartItem({ color, value, name, series, align = 'center' }: FiguresChartItemProps) {
    const alignFunction = {
        left: 'justify-start',
        right: 'justify-end',
        center: 'justify-center',
    };

    return (
        <div className={`flex ${alignFunction[align]}`}>
            <Chart type={'bar'} width={'80px'} height={'80px'} options={defaultOptions} series={series} />
            <div className={'pt-6'}>
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
    align?: text_align;
}

// noinspection JSUnusedGlobalSymbols
export default FiguresChartItem;

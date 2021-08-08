import clsx from 'clsx';
import Chart from 'react-apexcharts';
import Text from '../../atoms/Text';
import { ApexOptions } from 'apexcharts';
import { box_color } from '../../types';
import { AsComponent } from '../../as';

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

export function FiguresChart({ className, items }: FiguresChartProps) {
    return (
        <>
            {items && (
                <div className={clsx('grid grid-cols-4 xs:grid-cols-1 divide-x xs:divide-x-0', className)}>
                    {items.map(({ options, series, value, name, color }, index) => (
                        <div className={'p-6 flex-1 flex items-center space-x-2'} key={index}>
                            <Chart
                                type={'bar'}
                                width={'80px'}
                                height={'80px'}
                                options={defaultOptions}
                                series={series}
                            />
                            <div>
                                <Text text={`${value}`} color={color} variant={'title6'} />
                                <Text text={name} color={color} variant={'description'} />
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}

export interface FiguresChartProps extends AsComponent {
    items?: {
        color: box_color;
        name?: string;
        options?: ApexOptions;
        series?: {
            data?: number[];
        }[];
        value?: number;
    }[];
}

// noinspection JSUnusedGlobalSymbols
export default FiguresChart;

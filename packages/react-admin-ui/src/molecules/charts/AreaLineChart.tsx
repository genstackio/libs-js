import { useCallback, useState } from 'react';
import clsx from 'clsx';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import Div from '../../atoms/Div';
import Button from '../../atoms/Button';
import { AsComponent } from '../../as';
import { WithColorOfBox } from '../../withs';

const defaultOptions: ApexOptions = {
    chart: {
        id: 'smooth-area-chart',
        toolbar: {
            show: false,
        },
    },
    stroke: {
        curve: 'smooth',
    },
    dataLabels: {
        enabled: false,
    },
    legend: {
        position: 'top',
        horizontalAlign: 'right',
        fontSize: '16px',
        onItemHover: {
            highlightDataSeries: true,
        },
        onItemClick: {
            toggleDataSeries: true,
        },
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
        categories: {},
    },
    yaxis: {
        show: false,
    },
    colors: [],
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'light',
            type: 'vertical',
            shadeIntensity: 0.5,
            opacityFrom: 1,
            opacityTo: 0,
            stops: [0, 80, 100],
        },
    },
};

export function AreaLineChart({ className, datas, color }: AreaLineChartProps) {
    const options = { ...defaultOptions, xaxis: { ...(defaultOptions.xaxis || {}) } };
    const [series, setSeries] = useState(datas[0]);
    const handleClick = useCallback((data) => () => setSeries(data), [setSeries]);
    options.xaxis.categories = series.categories;
    options.colors = series.colors;

    return (
        <Div relative className={clsx('min-h-250 h-auto md:h-3/4 p-2 sm:p-6', className)}>
            <Div flex className={'static sm:absolute top-2 left-2'}>
                {datas.map((data, index) => (
                    <Button
                        color={color}
                        disabled={series === data}
                        key={index}
                        label={data.label}
                        onClick={handleClick(data)}
                        variant={'filled'}
                    />
                ))}
            </Div>
            <Chart height={'100%'} options={options} series={series.series} type={'area'} />
        </Div>
    );
}

export interface AreaLineChartProps extends AsComponent, WithColorOfBox {
    datas: {
        categories?: string[];
        colors?: string[];
        label?: string;
        series: {
            name?: string;
            data?: number[];
        }[];
    }[];
}

// noinspection JSUnusedGlobalSymbols
export default AreaLineChart;

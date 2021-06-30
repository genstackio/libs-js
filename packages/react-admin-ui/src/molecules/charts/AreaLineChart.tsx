import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import Button from '../../atoms/Button';
import { useCallback, useState } from 'react';
import { box_color, class_name } from '../../types';
import clsx from 'clsx';

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
        <div className={clsx('relative h-3/4 min-h-250 md:h-auto p-6 xs:p-2', className)}>
            <div className={'absolute xs:static top-2 left-2 flex'}>
                {datas.map((data, index) => (
                    <Button
                        variant={'filled'}
                        color={color}
                        key={index}
                        onClick={handleClick(data)}
                        disabled={series === data}
                    >
                        {data.label}
                    </Button>
                ))}
            </div>
            <Chart type={'area'} height={'100%'} options={options} series={series.series} />
        </div>
    );
}

export interface AreaLineChartProps {
    className?: class_name;
    datas: {
        categories?: string[];
        colors?: string[];
        label?: string;
        series: {
            name?: string;
            data?: number[];
        }[];
    }[];
    color?: box_color;
}

export default AreaLineChart;

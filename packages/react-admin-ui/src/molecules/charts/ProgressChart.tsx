import Chart from 'react-apexcharts';
import { Text } from '../../atoms/Text';
import { Icon } from '../../atoms/Icon';
import formatAmount from '../../utils/formatAmount';
import { ApexOptions } from 'apexcharts';
import tailwindConfig from '../../../tailwind.config';
import { box_color, box_variant } from '../../types';

const tailwindChartColors = tailwindConfig.theme.extend.chartColors;

const defaultOptions: ApexOptions = {
    chart: {
        toolbar: {
            show: false,
        },
        sparkline: {
            enabled: true,
        },
    },
    stroke: {
        curve: 'smooth',
    },
    dataLabels: {
        enabled: false,
    },
    legend: {},
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
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'light',
            type: 'vertical',
            shadeIntensity: 0.5,
            opacityFrom: 0.8,
            opacityTo: 0,
        },
    },
};

export function ProgressChart({
    series,
    progress,
    title,
    unit,
    value,
    color = 'primary',
    variant = 'filled',
}: ProgressChartProps) {
    const col = `${variant}_${color}`;
    const options = { ...defaultOptions, colors: tailwindChartColors[col] };

    const newData: { data: number[] }[] = series.reduce((acc, data) => {
        acc.push({ data: data });
        return acc;
    }, [] as { data: number[] }[]);

    return (
        <div>
            <div className={'p-10 flex justify-between items-center max-h-80'}>
                <div>
                    <Text text={title} variant={'title6'} />
                    {progress && (
                        <div className={'flex items-center'}>
                            <Text text={`${progress}%`} variant={'description'} />
                            <Icon icon={progress > 0 ? 'expand_less_icon' : 'expand_more_icon'} />
                        </div>
                    )}
                </div>
                {value && <Text text={formatAmount(value, unit)} variant={'title5'} />}
            </div>
            <Chart type={'area'} height={180} options={options} series={newData} />
        </div>
    );
}

export interface ProgressChartProps {
    series: number[][];
    progress?: number;
    title?: string;
    unit?: string;
    value?: number;
    color?: box_color;
    variant?: box_variant;
}

export default ProgressChart;

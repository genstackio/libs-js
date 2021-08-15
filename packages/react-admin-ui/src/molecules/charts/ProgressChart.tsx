import { useMemo } from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import tailwindConfig from '../../../tailwind.config';
import Div from '../../atoms/Div';
import Text from '../../atoms/Text';
import Icon from '../../atoms/Icon';
import formatAmount from '../../utils/formatAmount';
import { AsComponent } from '../../as';
import { WithBox, WithSeries, WithTitle, WithValueAsNumber } from '../../withs';

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
    className,
    color = 'primary',
    progress,
    series = [],
    title,
    unit,
    value,
    variant = 'filled',
}: ProgressChartProps) {
    const options = useMemo(() => {
        const col = `${variant}_${color}`;
        return { ...defaultOptions, colors: tailwindChartColors[col] };
    }, [variant, color]);
    const newData: { data: number[] }[] = useMemo(
        () =>
            series.reduce((acc, data) => {
                acc.push({ data: data } as any);
                return acc;
            }, [] as { data: number[] }[]),
        [series],
    );

    return (
        <div className={className}>
            <Div center flex p={'sl'} size={'_xl'} spacebetween>
                <div>
                    <Text text={title} variant={'title6'} />
                    {progress && (
                        <Div center flex>
                            <Text text={`${progress}%`} variant={'description'} />
                            <Icon icon={progress > 0 ? 'expand_less_icon' : 'expand_more_icon'} />
                        </Div>
                    )}
                </div>
                <Text text={formatAmount(value, unit)} variant={'title5'} />
            </Div>
            <Chart height={180} options={options} series={newData} type={'area'} />
        </div>
    );
}

export interface ProgressChartProps extends AsComponent, WithTitle, WithBox, WithSeries, WithValueAsNumber {
    progress?: number;
    unit?: string;
}

// noinspection JSUnusedGlobalSymbols
export default ProgressChart;

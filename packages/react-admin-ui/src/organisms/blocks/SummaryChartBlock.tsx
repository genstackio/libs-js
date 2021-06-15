import {ReactNode, useCallback, useState} from 'react';
import Chart from "react-apexcharts";
import {ApexOptions} from "apexcharts";
import {BaseBlockProps, Block, Button, Icon} from "../../atoms";

const defaultOptions: ApexOptions = {
    chart: {
        id: "smooth-area-chart",
        toolbar: {
            show: false
        },
    },
    stroke: {
        curve: 'smooth'
    },
    dataLabels: {
        enabled: false
    },
    legend: {
        position: 'top',
        horizontalAlign: 'right',
        fontSize: '16px',
        onItemHover: {
            highlightDataSeries: true
        },
        onItemClick: {
            toggleDataSeries: true
        },
    },
    grid: {
        show: false
    },
    xaxis: {
        labels: {
            show: false
        },
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false
        },
        categories: {}
    },
    yaxis: {
        show: false
    },
    colors: [],
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'light',
            type: "vertical",
            shadeIntensity: 0.5,
            opacityFrom: 1,
            opacityTo: 0,
            stops: [0, 80, 100],
        }
    }
};

export function SummaryChartBlock({btnLabel, chartItems = [], dashboardItems = [], datas, subtitle, title, ...props}: SummaryChartBlockProps) {
    const [series, setSeries] = useState(datas[0]);
    const options = {...defaultOptions, xaxis: {...(defaultOptions.xaxis || {})}};
    options.xaxis.categories = series.categories;
    options.colors = series.colors;
    const handleClick = useCallback((data) => () => setSeries(data), [setSeries]);
    return (
        <Block padding={'none'} {...props}>
            <div className={'w-full grid grid-cols-4'}>
                <div className={'md:col-span-4 border-r-1 md:border-r-0 md:border-b-1 p-6 xs:p-2 flex flex-col md:space-y-4'}>
                    <div className={'flex justify-between items-center mb-2'}>
                        <div>
                            <div className={'font-bold'}>{title}</div>
                            <div className={'text-sm'}>{subtitle}</div>
                        </div>
                        {btnLabel && <Button className={'hidden md:block'} color={props.color} variant={'contained'}>{btnLabel}</Button>}
                    </div>
                    {dashboardItems && <div className={'mb-2 md:flex md:flex-wrap md:justify-between md:items-center'}>
                        {dashboardItems.map(({value, description}, index) => (
                            <div className={'mb-2'} key={index}>
                                <div className={'font-bold'}>{value}</div>
                                <div className={'text-sm'}>{description}</div>
                            </div>
                        ))}
                    </div>}
                    {btnLabel && <Button className={'self-start md:hidden'} color={props.color} variant={'contained'}>{btnLabel}</Button>}
                </div>
                <div className={'col-span-3 md:col-span-4'}>
                    <div  className={'relative h-3/4 min-h-250 md:h-auto p-6 xs:p-2'}>
                        <div className={'absolute xs:static top-2 left-2 flex'}>
                            {datas.map((data, index) => (
                                <Button variant={'filled'} color={props.color} key={index} onClick={handleClick(data)} disabled={series === data}>{data.label}</Button>
                            ))}
                        </div>
                        <Chart type={'area'} height={'100%'} options={options} series={series.series} />
                    </div>
                    {chartItems && <div className={'h-1/4 md:h-auto border-t-1 p-6 xs:p-2 flex md:flex-wrap justify-between md:space-y-3'}>
                        {chartItems.map(({icon, color, name, value}, index) => (
                            <div className={'flex items-center space-x-2'} key={index}>
                                <div className={'w-10 h-10 rounded-full flex justify-center items-center hover:animate-pulse bg-'+`${color}`}>
                                    <Icon icon={icon} />
                                </div>
                                <div>
                                    <div className={'font-bold'}>{name}</div>
                                    <div className={'text-sm'}>{value}</div>
                                </div>
                            </div>
                        ))}
                    </div>}
                </div>
            </div>
        </Block>
    );
}

export interface SummaryChartBlockProps extends BaseBlockProps {
    btnLabel?: string,
    chartItems?: {
        color?: string,
        icon?: ReactNode,
        name?: string,
        value?: number,
    }[],
    dashboardItems?: {
        description?: string,
        value?: string,
    }[],
    datas: {
        categories?: string[],
        colors?: string[],
        label?: string,
        series: {
            name?: string,
            data?: number[]
        }[],
    }[],
    subtitle?: string,
    title?: string,
}

export default SummaryChartBlock
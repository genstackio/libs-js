import clsx from 'clsx';
import Button from '../../atoms/Button';
import { icon } from '../../types';
import Icon from '../../atoms/Icon';
import AreaLineChart from './AreaLineChart';
import { boxColorClass } from '../../mappings/box-colors';
import { WithBoxColor, WithClassName } from '../../withs';

export function SummaryChart({
    className,
    chartItems = [],
    btnLabel,
    datas,
    dashboardItems = [],
    subtitle,
    title,
    ...props
}: SummaryChartProps) {
    return (
        <div className={clsx('w-full grid grid-cols-4', className)}>
            <div
                className={'md:col-span-4 border-r-1 md:border-r-0 md:border-b-1 p-6 xs:p-2 flex flex-col md:space-y-4'}
            >
                <div className={'flex justify-between items-center mb-2'}>
                    <div>
                        {title && <div className={'font-bold'}>{title}</div>}
                        {subtitle && <div className={'text-sm'}>{subtitle}</div>}
                    </div>
                    {btnLabel && (
                        <Button className={'hidden md:block'} color={props.color} variant={'contained'}>
                            {btnLabel}
                        </Button>
                    )}
                </div>
                {dashboardItems && (
                    <div className={'mb-2 md:flex md:flex-wrap md:justify-between md:items-center'}>
                        {dashboardItems.map(({ value, description }, index) => (
                            <div className={'mb-2'} key={index}>
                                <div className={'font-bold'}>{value}</div>
                                <div className={'text-sm'}>{description}</div>
                            </div>
                        ))}
                    </div>
                )}
                {btnLabel && (
                    <Button className={'self-start md:hidden'} color={props.color} variant={'contained'}>
                        {btnLabel}
                    </Button>
                )}
            </div>
            <div className={'col-span-3 md:col-span-4'}>
                <AreaLineChart datas={datas} color={props.color} />
                {chartItems && (
                    <div
                        className={
                            'h-1/4 md:h-auto border-t-1 p-6 xs:p-2 flex md:flex-wrap justify-between md:space-y-3'
                        }
                    >
                        {chartItems.map(({ icon, color, name, value }, index) => (
                            <div className={'flex items-center space-x-2'} key={index}>
                                <div
                                    className={clsx(
                                        'w-10 h-10 rounded-full flex justify-center items-center hover:animate-pulse',
                                        boxColorClass(props.color),
                                    )}
                                >
                                    <Icon icon={icon} />
                                </div>
                                <div>
                                    <div className={'font-bold'}>{name}</div>
                                    <div className={'text-sm'}>{value}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export interface SummaryChartProps extends WithClassName, WithBoxColor {
    datas: {
        categories?: string[];
        colors?: string[];
        label?: string;
        series: {
            name?: string;
            data?: number[];
        }[];
    }[];
    btnLabel?: string;
    chartItems?: {
        color?: string;
        icon?: icon;
        name?: string;
        value?: number;
    }[];
    dashboardItems?: {
        description?: string;
        value?: string;
    }[];
    subtitle?: string;
    title?: string;
}

// noinspection JSUnusedGlobalSymbols
export default SummaryChart;

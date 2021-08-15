import clsx from 'clsx';
import Div from '../../atoms/Div';
import Row from '../../atoms/Row';
import Icon from '../../atoms/Icon';
import Buttons from '../../atoms/Buttons';
import AreaLineChart from './AreaLineChart';
import { boxColorClass } from '../../mappings/box-colors';
import useButtons from '../../hooks/useButtons';
import { icon } from '../../types';
import { AsComponent } from '../../as';
import { WithColorOfBox, WithSubtitle, WithTitle, WithButtons } from '../../withs';

export function SummaryChart({
    chartItems = [],
    className,
    color,
    datas,
    dashboardItems = [],
    subtitle,
    title,
    ...props
}: SummaryChartProps) {
    const [buttonsProps] = useButtons(props);

    return (
        <Div grid={4} className={className}>
            <Div
                col
                p={'lg'}
                className={'col-span-1 md:border-r-1 border-r-0 border-b-1 sm:border-b-0 md:space-y-4 sm:p-2 p-0'}
            >
                <Div center flex spaced mb={'sm'}>
                    <div>
                        {title && <div className={'font-bold'}>{title}</div>}
                        {subtitle && <div className={'text-sm'}>{subtitle}</div>}
                    </div>
                </Div>
                {dashboardItems && (
                    <Div mb={'sm'}>
                        {dashboardItems.map(({ value, description }, index) => (
                            <div className={'mb-2'} key={index}>
                                <div className={'font-bold'}>{value}</div>
                                <div className={'text-sm'}>{description}</div>
                            </div>
                        ))}
                    </Div>
                )}
                <Buttons {...buttonsProps} btnColor={color} className={'self-start hidden md:block'} />
            </Div>
            <div className={'col-span-1 sm:col-span-3'}>
                <AreaLineChart datas={datas} color={color} />
                {chartItems && (
                    <Row
                        spacebetween
                        spaced={30}
                        wrap
                        className={'h-auto md:h-1/4 border-t-1 p-2 sm:p-6 md:flex-nowrap'}
                    >
                        {chartItems.map(({ icon, color, name, value }, index) => (
                            <Div flex key={index} spaced={2}>
                                <Div
                                    center
                                    flex
                                    className={clsx(
                                        'w-10 h-10 rounded-full hover:animate-pulse',
                                        boxColorClass(color as any),
                                    )}
                                >
                                    <Icon icon={icon} />
                                </Div>
                                <div>
                                    <div className={'font-bold'}>{name}</div>
                                    <div className={'text-sm'}>{value}</div>
                                </div>
                            </Div>
                        ))}
                    </Row>
                )}
            </div>
        </Div>
    );
}

export interface SummaryChartProps extends AsComponent, WithColorOfBox, WithButtons, WithTitle, WithSubtitle {
    datas: {
        categories?: string[];
        colors?: string[];
        label?: string;
        series: {
            name?: string;
            data?: number[];
        }[];
    }[];
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
}

// noinspection JSUnusedGlobalSymbols
export default SummaryChart;

import { args, s, a } from '../utils';
import {
    ProgressChart,
    SummaryChart,
    AreaChart,
    BarChart,
    BlockContent,
    LineChart,
    RadarChart,
    FiguresChart,
    StatsChartHeader,
    Block,
} from '../../src';
import StoreIcon from '@material-ui/icons/Store';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

export default {
    title: 'Atoms/BlockContent',
    component: BlockContent,
    argTypes: a({
        title: args.title,
        subtitle: args.subtitle,
        children: args.children,
        color: args.color,
        variant: args.blockVariant,
        padding: args.padding,
        corner: args.corner,
    }),
};

const Template = (args) => <BlockContent {...args} />;

export const basic = s(Template, {
    children: 'this is the content',
});

export const areaChart = s(
    ({ title, subtitle, value, series, ...props }) => (
        <Block {...props}>
            <StatsChartHeader subtitle={title} value={value} stats={subtitle} />
            <AreaChart color={props.color} series={series} />
        </Block>
    ),
    {
        series: [
            [40, 90, 80],
            [100, 70, 120],
            [30, 80, 60],
        ],
        title: (
            <>
                Today Total sale <b>89.21%</b>
            </>
        ),
        subtitle: '$300056',
    },
);

export const fullWidthAreaChart = s(
    ({ title, subtitle, value, series, ...props }) => (
        <Block padding={'none'} {...props}>
            <StatsChartHeader className={'p-10'} subtitle={title} value={value} stats={subtitle} />
            <AreaChart color={props.color} series={series} />
        </Block>
    ),
    {
        series: [
            [40, 90, 80],
            [100, 70, 120],
            [30, 80, 60],
        ],
        title: (
            <>
                Today Total sale <b>89.21%</b>
            </>
        ),
        subtitle: '$300056',
    },
);

export const radarChart = s(
    ({ labels, series, ...props }) => (
        <Block padding={'none'} {...props}>
            <RadarChart color={props.color} variant={props.variant} isMenu={false} labels={labels} series={series} />
        </Block>
    ),
    {
        title: 'Market Value',
        dropdownItems: [{ name: 'Year' }, { name: 'Month' }, { name: 'Day' }],
        labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        series: [
            {
                name: 'Market value',
                data: [20, 100, 40, 30, 50, 80, 30],
            },
        ],
    },
);

export const barChart = s(
    ({ labels, subtitle, value, stats, series, ...props }) => (
        <BlockContent {...props}>
            <StatsChartHeader stats={stats} subtitle={subtitle} value={value} />
            <BarChart color={props.color} labels={labels} series={series} />
        </BlockContent>
    ),
    {
        title: 'Marketing Expenses',
        value: '35.00%',
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
        series: [
            [40, 90, 80, 40, 90, 80, 40, 90, 80, 40, 90, 80],
            [100, 70, 120, 100, 70, 120, 100, 70, 120, 100, 70, 120],
            [30, 80, 20, 30, 80, 20, 30, 80, 20, 30, 80, 20],
        ],
    },
);

export const figuresChart = s(
    ({ items, ...props }) => (
        <BlockContent padding={'none'} {...props}>
            <FiguresChart items={items} />
        </BlockContent>
    ),
    {
        items: [
            {
                series: [{ data: [400, 900, 800, 1000, 700, 1200, 300] }],
                value: 1001,
                name: 'Purchase',
                colors: ['#7366FF'],
            },
            {
                series: [{ data: [400, 600, 900, 800, 1000, 1200, 500] }],
                value: 1005,
                name: 'Sales',
                colors: ['#F73164'],
            },
            {
                series: [{ data: [1100, 900, 600, 1000, 700, 1200, 300] }],
                value: 100,
                name: 'Sales return',
                colors: ['#7366FF'],
            },
            {
                series: [{ data: [400, 600, 800, 1000, 700, 1100, 300] }],
                value: 101,
                name: 'Purchase ret',
                colors: ['#F73164'],
            },
        ],
    },
);
export const lineChart = s(
    ({ labels, series, description, ...props }) => (
        <BlockContent {...props}>
            <LineChart
                color={props.color}
                variant={props.variant}
                labels={labels}
                series={series}
                title={description}
            />
        </BlockContent>
    ),
    {
        title: 'Turnover',
        description: 'Fundamental Analysis of Stocks',
        labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        series: [
            [8100, 8337, 8700, 8530, 8990, 9130, 9400],
            [11100, 11337, 6700, 6900, 11990, 11130, 11400],
        ],
        variant: 'filled',
    },
);

export const progressChart = s(
    ({ series, title, progress, value, unit, ...props }) => (
        <BlockContent padding={'none'} {...props}>
            <ProgressChart
                color={props.color}
                variant={props.variant}
                series={series}
                title={title}
                progress={progress}
                value={value}
                unit={unit}
            />
        </BlockContent>
    ),
    {
        title: 'SALE',
        progress: 90,
        value: 3654.0,
        unit: '$',
        series: [[4, 2, 7, 8, 10, 12, 14]],
    },
);
export const summaryChart = s(
    ({ title, subtitle, dashboardItems, btnLabel, chartItems, datas, ...props }) => (
        <BlockContent padding={'none'} {...props}>
            <SummaryChart
                title={title}
                subtitle={subtitle}
                dashboardItems={dashboardItems}
                btnLabel={btnLabel}
                chartItems={chartItems}
                datas={datas}
            />
        </BlockContent>
    ),
    {
        title: 'Dashboard',
        subtitle: 'Overview of last month',
        dashboardItems: [
            {
                value: '$4055.56',
                description: 'This Month Earning',
            },
            {
                value: '$1004.11',
                description: 'This Month Profit',
            },
            {
                value: '90%',
                description: 'This Month Sale',
            },
        ],
        btnLabel: 'Summary',
        chartItems: [
            {
                icon: <StoreIcon className={'text-white'} />,
                color: 'primary',
                name: 'Referral Earning',
                value: '$5,000.20',
            },
            {
                icon: <FavoriteIcon className={'text-white'} />,
                color: 'secondary',
                name: 'Cash Balance',
                value: '$2,657.21',
            },
            {
                icon: <AttachMoneyIcon className={'text-white'} />,
                color: 'primary',
                series: [{ data: [40, 90, 80, 100, 70, 120, 30, 80, 20, 73, 60] }],
                name: 'Sales Forecasting',
                value: '$9,478.50',
            },
        ],
        datas: [
            {
                label: 'Yearly',
                categories: [
                    'Jan',
                    'Fev',
                    'Mars',
                    'Avr',
                    'Mai',
                    'Juin',
                    'Juil',
                    'Aout',
                    'Sept',
                    'Oct',
                    'Nov',
                    'Dec',
                    'Jan',
                ],
                colors: ['#7366FF', '#F73164'],
                series: [
                    {
                        name: 'Online',
                        data: [6, 20, 15, 40, 18, 20, 18, 23, 18, 35, 30, 55, 0],
                    },
                    {
                        name: 'Store',
                        data: [2, 22, 35, 32, 40, 25, 50, 38, 42, 28, 20, 45, 0],
                    },
                ],
            },
            {
                label: 'Weekly',
                categories: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
                colors: ['#7366FF', '#F73164'],
                series: [
                    {
                        name: 'Online',
                        data: [6, 20, 33, 18, 20, 15, 0],
                    },
                    {
                        name: 'Store',
                        data: [2, 35, 82, 15, 60, 35, 0],
                    },
                ],
            },
        ],
    },
);

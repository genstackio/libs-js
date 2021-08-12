import { args, s, a } from '../../utils';
import { SummaryChart } from '../../../src';
import StoreIcon from '@material-ui/icons/Store';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

export default {
    title: 'Molecules/charts/SummaryChart',
    component: SummaryChart,
    argTypes: a({
        datas: args.datas,
        color: args.color,
        variant: args.blockVariant,
    }),
};

export const basic = s(SummaryChart, {
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
});

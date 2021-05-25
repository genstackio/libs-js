import {args, s} from "../../utils";
import {ProgressChartBlock} from '../../../src';

export default {
    title: 'Organisms/Blocks/ProgressChartBlock',
    component: ProgressChartBlock,
    argTypes: {
        title: args.title,
        progress: args.progress,
        value: args.value,
        unit: args.unit,
        chart: args.chart,
        color: args.color,
        variant: args.blockVariant,
        padding: args.padding,
    },
}

const Template = args => <ProgressChartBlock {...args} />;

export const basic = s(Template, {
    title: 'SALE',
    progress: 90,
    value: 3654.00,
    unit: '$',
    chart: {
        series: [{
            data: [4, 2, 7, 8, 10, 12, 14]
        }],
        chart: {
            toolbar: {
                show: false
            },
            sparkline: {
                enabled: true
            }
        },
        stroke: {
            curve: 'smooth'
        },
        dataLabels: {
            enabled: false
        },
        legend: {

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
        },
        yaxis: {
            show: false
        },
        colors: ['#7366FF'],
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'light',
                type: "vertical",
                shadeIntensity: 0.5,
                opacityFrom: 0.8,
                opacityTo: 0,
            }
        }
    }
});
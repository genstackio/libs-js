import {args, s} from "../../utils";
import {FiguresBlock} from '../../../src';

export default {
    title: 'Organisms/Blocks/FiguresBlock',
    component: FiguresBlock,
    argTypes: {
        items: args.items,
        color: args.color,
        variant: args.blockVariant,
        padding: args.padding,
    },
}

const Template = args => <FiguresBlock {...args} />;

const defaultOptions = {
        chart: {
            toolbar: {
                show: false
            },
        },
        tooltip: {
            custom: function({series, seriesIndex, dataPointIndex}) {
                return '<div class="arrow_box">' +
                            '<span>' + series[seriesIndex][dataPointIndex] + '</span>' +
                        '</div>'
            }
        },
        plotOptions: {
            bar: {
                columnWidth: '50%',
                colors: {
                    backgroundBarColors: ["DCDCDC", "DCDCDC", "DCDCDC", "DCDCDC"],
                    backgroundBarOpacity: 0.1,
                }
            }
        },
        stroke: {
            show: true
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false
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
            }
        },
        yaxis: {
            show: false
        },
        colors: [],
    };
const primaryOptions =  {...defaultOptions, colors: ["#7366FF"]};
const secondaryOptions =  {...defaultOptions, colors: ["#F73164"]};

export const basic = s(Template, {
    items: [
        {
            options: primaryOptions,
            series: [{data: [400, 900, 800, 1000, 700, 1200, 300]}],
            value: 1001,
            name: 'Purchase',
            color: 'dark'
        },
        {
            options: secondaryOptions,
            series: [{data: [400, 600, 900, 800, 1000, 1200, 500]}],
            value: 1005,
            name: 'Sales',
            color: 'dark'
        },
        {
            options: primaryOptions,
            series: [{data: [1100, 900, 600, 1000, 700, 1200, 300]}],
            value: 100,
            name: 'Sales return',
            color: 'dark'
        },
        {
            options: secondaryOptions,
            series: [{data: [400, 600, 800, 1000, 700, 1100, 300]}],
            value: 101,
            name: 'Purchase ret',
            color: 'dark'
        },
    ]
});
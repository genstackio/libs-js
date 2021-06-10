import {args, s} from "../../utils";
import {SummaryChart} from '../../../src';

export default {
    title: 'Molecules/charts/SummaryChart',
    component: SummaryChart,
    argTypes: {
        datas: args.datas,
        color: args.color,
        variant: args.blockVariant,
    },
}

const Template = args => <SummaryChart {...args} />;

export const basic = s(Template, {
    datas: [
        {
            label: 'Yearly',
            categories: ['Jan', 'Fev', 'Mars', 'Avr', 'Mai', 'Juin', 'Juil', 'Aout', 'Sept', 'Oct', 'Nov', 'Dec', 'Jan'],
            colors: ["#7366FF", "#F73164"],
            series: [
                {
                    name: "Online",
                    data: [6, 20, 15, 40, 18, 20, 18, 23, 18, 35, 30, 55, 0],
                },
                {
                    name: "Store",
                    data: [2, 22, 35, 32, 40, 25, 50, 38, 42, 28, 20, 45, 0],
                }
            ],
        },
        {
            label: 'Weekly',
            categories: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
            colors: ["#7366FF", "#F73164"],
            series: [
                {
                    name: "Online",
                    data: [6, 20, 33, 18, 20, 15, 0],
                },
                {
                    name: "Store",
                    data: [2, 35, 82, 15, 60, 35, 0],
                }
            ],
        }
    ],
});
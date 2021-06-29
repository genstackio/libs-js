import { args, s, a } from '../../utils';
import { AreaLineChart } from '../../../src';

export default {
    title: 'Molecules/charts/AreaLineChart',
    component: AreaLineChart,
    argTypes: a({
        title: args.title,
        overline: args.overline,
        color: args.color,
        series: args.series,
    }),
};

const Template = (args) => <AreaLineChart {...args} />;

export const basic = s(Template, {
    datas: [
        {
            categories: ['categorie1', 'categorie2', 'categorie3'],
            colors: ['#00a1ff', '#5c9376', '#fc6f42'],
            label: 'categorie1',
            series: [
                {
                    name: 'serie1',
                    data: [0, 1, 2],
                },
                {
                    name: 'serie2',
                    data: [3, 4, 5],
                },
                {
                    name: 'serie3',
                    data: [6, 7, 8],
                },
            ],
        },
        {
            categories: ['categorie9', 'categorie8', 'categorie7'],
            colors: ['#00a1ff', '#FFF', '#ff0000'],
            label: 'categorie2',
            series: [
                {
                    name: 'serie7',
                    data: [10, 11, 12],
                },
                {
                    name: 'serie8',
                    data: [23, 24, 25],
                },
                {
                    name: 'serie9',
                    data: [36, 37, 38],
                },
            ],
        },
    ],
});

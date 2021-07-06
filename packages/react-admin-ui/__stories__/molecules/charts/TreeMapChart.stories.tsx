import { args, s, a } from '../../utils';
import { TreeMapChart } from '../../../src';

export default {
    title: 'Molecules/charts/TreeMapChart',
    component: TreeMapChart,
    argTypes: a({
        color: args.color,
        values: args.values,
    }),
};

const Template = (args) => <TreeMapChart {...args} />;

export const basic = s(Template, {
    values: [
        {
            label: 'Confiance en soi',
            value: 6,
        },
        {
            label: 'Gestion de son temps',
            value: 2,
        },
        {
            label: 'Relations humaines',
            value: 8,
        },
        {
            label: 'Équilibre de vie',
            value: 12,
        },
        {
            label: 'Motivation',
            value: 5,
        },
        {
            label: "Stress, inquietude",
            value: 1,
        },
        {
            label: "État de santé",
            value: 7
        },
    ],
});

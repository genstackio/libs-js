import { args, s, a } from '../../utils';
import { ItemCard } from '../../../src';

export default {
    title: 'Molecules/cards/ItemCard',
    component: ItemCard,
    argTypes: a({
        variant: args.blockVariant,
        color: args.color,
    }),
};

const Template = (args) => <ItemCard {...args} />;

export const basic = s(Template, {
    title: 'UI/UX IT Frontend Developer',
    subtitle: '(L6) Salt Lake City, UT',
    date: '3 days ago',
    description:
        'Advenit post multos Scudilo Scutariorum tribunus velamento subagrestis ingenii persuasionis opifex callidus. qui eum adulabili sermone seriis admixto solus omnium proficisci pellexit vultu adsimulato saepius replicando quod flagrantibus votis eum videre frater cuperet patruelis, siquid per inprudentiam gestum est remissurus ut mitis et clemens, participemque eum suaemaiestatis adscisceret, futurum laborum quoque socium, quos Arctoae provinciae diu fessae poscebant.',
    colorDate: 'dark',
});

export const withIcone = s(Template, {
    title: 'First French Kebab',
    subtitle: 'Toujours convoité, jamais égalé !!!',
    description:
        'Advenit post multos Scudilo Scutariorum tribunus velamento subagrestis ingenii\n' +
        ' persuasionis opifex callidus. qui eum adulabili sermone seriis admixto solus omnium proficisci\n' +
        ' pellexit vultu adsimulato saepius replicando quod flagrantibus votis eum videre frater cuperet\n' +
        ' patruelis, siquid per inprudentiam gestum est remissurus ut mitis et clemens, participemque eum suae\n' +
        ' maiestatis adscisceret, futurum laborum quoque socium, quos Arctoae provinciae diu fessae\n' +
        ' poscebant.',
    icon: 'local_bar',
    size: 40,
});

export const Federica = s(Template, {
    title: 'W la mer',
    subtitle: 'Toujours convoité, jamais égalé !!!',
    description:
        'Advenit post multos Scudilo Scutariorum tribunus velamento subagrestis ingenii\n' +
        ' persuasionis opifex callidus. qui eum adulabili sermone seriis admixto solus omnium proficisci\n' +
        ' pellexit vultu adsimulato saepius replicando quod flagrantibus votis eum videre frater cuperet\n' +
        ' patruelis, siquid per inprudentiam gestum est remissurus ut mitis et clemens, participemque eum suae\n' +
        ' maiestatis adscisceret, futurum laborum quoque socium, quos Arctoae provinciae diu fessae\n' +
        ' poscebant.',
    icon: 'local_bar',
    size: 40,
});

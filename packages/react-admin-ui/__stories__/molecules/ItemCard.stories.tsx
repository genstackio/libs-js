import {args, s} from "../utils";
import {ItemCard} from '../../src';

export default {
    title: 'Molecules/ItemCard',
    component: ItemCard,
    argTypes: {
        blockVariant: args.blockVariant,
        blockColor: args.color,
    },
}

const Template = args => <ItemCard {...args} />;

export const basic = s(Template, {
    title: "UI/UX IT Frontend Developer",
    subTitle: "(L6) Salt Lake City, UT",
    text: "Advenit post multos Scudilo Scutariorum tribunus velamento subagrestis ingenii\n" +
        " persuasionis opifex callidus. qui eum adulabili sermone seriis admixto solus omnium proficisci\n" +
        " pellexit vultu adsimulato saepius replicando quod flagrantibus votis eum videre frater cuperet\n" +
        " patruelis, siquid per inprudentiam gestum est remissurus ut mitis et clemens, participemque eum suae\n" +
        " maiestatis adscisceret, futurum laborum quoque socium, quos Arctoae provinciae diu fessae\n" +
        " poscebant.",
})
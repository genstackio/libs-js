import { args, a, s } from '../utils';
import { PushSliderItem } from '../../src';

export default {
    title: 'Molecules/PushSliderItem',
    component: PushSliderItem,
    argTypes: a({
        items: args.items,
    }),
};

export const basic = s(PushSliderItem, {
    title: 'Un titre',
    subtitle: 'Un sous-titre',
    description: 'Le texte qui va avec',
    btnLabel: 'Cliquez ici',
    image: { url: 'https://via.placeholder.com/687x426?text=Image' },
});

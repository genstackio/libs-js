import { args, a, s } from '../utils';
import { PushSlider } from '../../src';

export default {
    title: 'Organisms/PushSlider',
    component: PushSlider,
    argTypes: a({
        items: args.items,
    }),
};

const Template = (args) => <PushSlider {...args} />;

export const basic = s(Template, {
    items: [
        {
            title: 'Un titre',
            subtitle: 'Un sous-titre',
            description: 'Le texte qui va avec',
            btnLabel: 'Cliquez ici',
            image: { url: 'https://via.placeholder.com/687x426?text=Image' },
        },
        {
            title: 'Un autre titre',
            subtitle: 'Un autre sous-titre',
            description: 'Encore un texte qui va avec mais qui cette fois est un petit peu plus long',
            btnLabel: 'Mon Bouton',
            image: { url: 'https://via.placeholder.com/687x426?text=Image' },
            bgImage: { url: 'https://via.placeholder.com/687x426?text=Image' },
        },
        {
            title: 'Le dernier titre',
            subtitle: 'Le dernier sous-titre',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet quam imperdiet diam' +
                ' rhoncus faucibus eget gravida purus. Maecenas maximus neque ut lorem feugiat, nec maximus risus' +
                ' rhoncus. Cras pharetra, dolor a lobortis cursus, nisl sem vehicula leo, vitae iaculis purus tortor' +
                ' sed metus. Aenean congue tincidunt enim. Integer pharetra at tortor sit amet lacinia. Ut feugiat' +
                ' consequat volutpat. Nullam semper ullamcorper libero, eu tempor ligula commodo a. Maecenas id libero' +
                ' sed lorem porta aliquet. Phasellus pulvinar sem enim, eget ultricies ante tempus aliquam. Donec' +
                ' venenatis sollicitudin dolor, vel porttitor ipsum mattis non. Cras et arcu tellus. Mauris mollis ' +
                'varius justo, ut consectetur est finibus eu. Maecenas ornare lectus non quam blandit, sit amet ' +
                'aliquet eros dapibus. Curabitur id mauris nec dui accumsan blandit ut ut diam.',
            btnLabel: "J'ai tout lu !",
            image: { url: 'https://via.placeholder.com/687x426?text=Image' },
            imageLeft: true,
        },
    ],
});

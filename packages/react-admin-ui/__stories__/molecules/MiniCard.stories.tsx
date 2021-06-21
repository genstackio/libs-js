import {s, a} from '../utils';
import {MiniCard} from '../../src';

export default {
    title: 'Molecules/MiniCard',
    component: MiniCard,
    argTypes: a({}),

}

const Template = args => (<MiniCard {...args} >
    <div className='text-center'>9 April 2018 | by: Admin | 0 Hits</div>
</MiniCard>);

export const basic = s(Template, {
    image: {
        url: 'https://picsum.photos/550/400',
        alt: 'alt',
    },
    title: "Perspicatis unde omnis iste natus error sit.Dummy text",})

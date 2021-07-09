import { s, a, args } from '../utils';
import { Text, Slider } from '../../src';

export default {
    title: 'Molecules/Slider',
    component: Slider,
    argTypes: a({
        color: args.color,
    }),
};

const Template = (args) => <Slider {...args} />;

export const basic = s(Template, {
    min: 0,
    max: 100,
    defaultValue: 20,
});

export const showcase = s(
    (args) => (
        <div className={'flex flex-col'}>
            <Text text={'VALUE'} variant={'title4'}/>
            <Template color={'primary'} min={0} max={100} value={10}/>
            <Template color={'secondary'} min={0} max={100} value={20}/>
            <Template color={'success'} min={0} max={100} value={30}/>
            <Template color={'info'} min={0} max={100} value={40}/>
            <Text text={'DEFAULT VALUE'} variant={'title4'}/>
            <Template color={'warning'} min={0} max={100} defaultValue={50}/>
            <Template color={'danger'} min={0} max={100} defaultValue={60}/>
            <Template color={'light'} min={0} max={100} defaultValue={70}/>
            <Template color={'dark'} min={0} max={100} defaultValue={80}/>
        </div>
    ),
    {},
);

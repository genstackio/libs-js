import { s, a, args } from '../utils';
import { Text, Slider } from '../../src';

export default {
    title: 'Molecules/Slider',
    component: Slider,
    argTypes: a({
        color: args.color,
    }),
};

export const basic = s(Slider, {
    min: 0,
    max: 100,
    defaultValue: 20,
});

export const showcase = s(
    (args) => (
        <div className={'flex flex-col'}>
            <Text text={'VALUE'} variant={'title4'} />
            <Slider color={'primary'} min={0} max={100} value={10} />
            <Slider color={'secondary'} min={0} max={100} value={20} />
            <Slider color={'success'} min={0} max={100} value={30} />
            <Slider color={'info'} min={0} max={100} value={40} />
            <Text text={'DEFAULT VALUE'} variant={'title4'} />
            <Slider color={'warning'} min={0} max={100} defaultValue={50} />
            <Slider color={'danger'} min={0} max={100} defaultValue={60} />
            <Slider color={'light'} min={0} max={100} defaultValue={70} />
            <Slider color={'dark'} min={0} max={100} defaultValue={80} />
        </div>
    ),
    {},
);

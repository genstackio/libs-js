import { args, s, a } from '../utils';
import { Spinner } from '../../src';

export default {
    title: 'Atoms/Spinner',
    component: Spinner,
    argTypes: a({
        variant: args.spinnerVariant,
        size: args.spinnerSize,
        color: args.spinnerColor,
    }),
};

export const basic = s(Spinner, {
    variant: 'half-circle',
});

export const showcase = s(
    (args) => (
        <div className={'flex flex-row items-center space-x-4'}>
            <Spinner variant={'full-circle'} />
            <Spinner variant={'half-circle'} />
            <Spinner variant={'separate-circle'} />
            <Spinner variant={'dotted-circle'} />
            <Spinner variant={'dots'} />
            <Spinner variant={'squares'} />
            <Spinner variant={'circle'} />
        </div>
    ),
    {},
);

import { args, s, a } from '../utils';
import { Rating } from '../../src';

export default {
    title: 'Atoms/Rating',
    component: Rating,
    argTypes: a({
        text: args.text,
        variant: args.ratingVariant,
        color: args.color,
        min: args.min,
        max: args.max,
        values: args.values,
        onChange: args.onChange,
        value: args.value,
        defaultValue: args.defaultValue,
        labelPlacement: args.labelPlacement,
    }),
};

export const basic = s(Rating, {
    min: 1,
    max: 10,
    defaultValue: 3,
});

export const withValues = s(Rating, {
    values: [
        {
            value: 'a',
            label: 'A',
        },
        {
            value: 'b',
            label: 'B',
        },
        {
            value: 'c',
            label: 'C',
        },
        {
            value: 'd',
            label: 'D',
        },
        {
            value: 'e',
            label: 'E',
        },
    ],
    defaultValue: 'b',
    variant: 'plates',
});
export const mood = s(Rating, {
    variant: 'mood',
});

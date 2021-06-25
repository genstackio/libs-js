import {
    BaseBaseRatingProps,
    BasicRating,
    MoodRating,
    LabelledSquaresRating,
    PillRating,
    PlatesRating,
    ReverseSquaresRating,
    SmallStarsRating,
    SquaresRating,
    StackRating,
    StarsRating,
    UnitsRating,
} from './ratings';
import { rich_text } from '../types';
import { rating_variant } from '../mappings/rating-variants';

const variants = {
    basic: BasicRating,
    'labelled-squares': LabelledSquaresRating,
    plates: PlatesRating,
    pill: PillRating,
    'reverse-squares': ReverseSquaresRating,
    'small-stars': SmallStarsRating,
    squares: SquaresRating,
    stack: StackRating,
    stars: StarsRating,
    units: UnitsRating,
    mood: MoodRating,
};

export function Rating({ variant = 'stars', ...props }: RatingProps) {
    const Component = variants[variant || 'basic'] || variants['basic'];
    return <Component {...props} />;
}

export interface RatingProps extends BaseBaseRatingProps {
    text?: rich_text;
    variant?: rating_variant;
}

export default Rating;

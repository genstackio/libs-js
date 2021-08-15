import BaseRating, { BaseBaseRatingProps } from './BaseRating';
import tailwindConfig from '../../../tailwind.config';
import { makeStyles } from '@material-ui/core/styles';

const tailwindColors = tailwindConfig.theme.extend.colors;
const colors = {
    primary: tailwindColors.primary,
    secondary: tailwindColors.secondary,
    success: tailwindColors.success,
    info: tailwindColors.info,
    warning: tailwindColors.warning,
    danger: tailwindColors.danger,
    light: tailwindColors.light,
    dark: tailwindColors.dark,
};
const useStyles = makeStyles({
    iconFilled: {
        color: (props: SmallStarsRatingProps) => colors[props.color || ''] || colors.primary,
    },
});

const ratingProps = { size: 'small' };
const labelProps = { variant: 'description' };

export function SmallStarsRating(props: SmallStarsRatingProps) {
    return (
        <BaseRating
            kind={'small-stars'}
            styles={useStyles}
            {...props}
            ratingProps={ratingProps}
            labelProps={labelProps}
        />
    );
}

export type SmallStarsRatingProps = BaseBaseRatingProps;

// noinspection JSUnusedGlobalSymbols
export default SmallStarsRating;

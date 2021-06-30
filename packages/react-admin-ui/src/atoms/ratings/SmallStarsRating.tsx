import { makeStyles } from '@material-ui/core/styles';
import tailwindConfig from '../../../tailwind.config';
import BaseRating, { BaseBaseRatingProps } from './BaseRating';

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

export function SmallStarsRating(props: SmallStarsRatingProps) {
    return (
        <BaseRating
            kind={'small-stars'}
            styles={useStyles}
            {...props}
            ratingProps={{ size: 'small' }}
            labelProps={{ variant: 'description' }}
        />
    );
}

export type SmallStarsRatingProps = BaseBaseRatingProps;

export default SmallStarsRating;

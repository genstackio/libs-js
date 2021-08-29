import Icon from '../Icon';
import tailwindConfig from '../../../tailwind.config';
import BaseRating, { BaseBaseRatingProps } from './BaseRating';
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

const Empty = () => <Icon icon={'star_border'} />;
const NonEmpty = () => <Icon icon={'star'} />;

const useStyles = makeStyles({
    iconFilled: {
        color: (props: StarsRatingProps) => colors[props.color || ''] || colors.primary,
    },
});
const labelProps = { variant: 'title6' };

export function StarsRating(props: StarsRatingProps) {
    return (
        <BaseRating
            emptyIcon={Empty}
            icon={NonEmpty}
            kind={'stars'}
            labelProps={labelProps}
            styles={useStyles}
            {...props}
        />
    );
}

export type StarsRatingProps = BaseBaseRatingProps;

// noinspection JSUnusedGlobalSymbols
export default StarsRating;

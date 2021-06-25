import Icon from '../Icon';
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

const Empty = () => <Icon icon={'star_border'} />;
const NonEmpty = () => <Icon icon={'star'} />;

const useStyles = makeStyles({
    iconFilled: {
        color: (props: StarsRatingProps) => colors[props.color || ''] || colors.primary,
    },
});

export function StarsRating(props: StarsRatingProps) {
    return (
        <BaseRating
            kind={'stars'}
            styles={useStyles}
            labelProps={{ variant: 'title6' }}
            icon={NonEmpty}
            emptyIcon={Empty}
            {...props}
        />
    );
}

export type StarsRatingProps = BaseBaseRatingProps;

export default StarsRating;

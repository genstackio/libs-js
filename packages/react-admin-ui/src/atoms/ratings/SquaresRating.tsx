import Div from '../Div';
import BaseRating, { BaseBaseRatingProps } from './BaseRating';
import { makeStyles } from '@material-ui/core/styles';

const colors = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    success: 'bg-success',
    info: 'bg-info',
    warning: 'bg-warning',
    danger: 'bg-danger',
    light: 'bg-light',
    dark: 'bg-dark',
};
const useStyles = makeStyles({
    iconEmpty: {
        opacity: 0.25,
    },
});

const Icon = ({ color }: any) => <Div mr={'xs'} size={'xs'} className={colors[(color as string) || 'primary']} />;

export function SquaresRating(props: SquaresRatingProps) {
    return <BaseRating icon={Icon} kind={'squares'} styles={useStyles} {...props} />;
}

export type SquaresRatingProps = BaseBaseRatingProps;

// noinspection JSUnusedGlobalSymbols
export default SquaresRating;

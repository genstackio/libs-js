import BaseRating, { BaseBaseRatingProps } from './BaseRating';
import { makeStyles } from '@material-ui/core/styles';
import Div from '../Div';

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
    root: {
        flexDirection: 'row-reverse',
    },
    iconEmpty: {
        opacity: 0.25,
    },
});

const Icon = ({ color }: any) => <Div mr={'xs'} size={'xs'} className={colors[(color as string) || 'primary']} />;

export function ReverseSquaresRating(props: ReverseSquaresRatingProps) {
    return <BaseRating icon={Icon} kind={'reverse-squares'} reverse styles={useStyles} {...props} />;
}

export type ReverseSquaresRatingProps = BaseBaseRatingProps;

// noinspection JSUnusedGlobalSymbols
export default ReverseSquaresRating;

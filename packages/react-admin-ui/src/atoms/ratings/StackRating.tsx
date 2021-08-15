import clsx from 'clsx';
import Div from '../Div';
import { makeStyles } from '@material-ui/core/styles';
import BaseRating, { BaseBaseRatingProps } from './BaseRating';

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
        flexDirection: 'column-reverse',
    },
    iconEmpty: {
        opacity: 0.25,
    },
});

const Icon = ({ color }: any) => <Div className={clsx('w-32 h-1 mb-rating', colors[(color as string) || 'primary'])} />;

export function StackRating(props: StackRatingProps) {
    return <BaseRating icon={Icon} kind={'stack'} labelPlacement={'bottom'} styles={useStyles} {...props} />;
}

export type StackRatingProps = BaseBaseRatingProps;

// noinspection JSUnusedGlobalSymbols
export default StackRating;

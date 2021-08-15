import clsx from 'clsx';
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

const Icon = ({ color }: any) => <Div mr={'xs'} className={clsx('w-16 h-2', colors[(color as string) || 'primary'])} />;

export function PlatesRating(props: PlatesRatingProps) {
    return <BaseRating icon={Icon} kind={'plates'} labelPlacement={'bottom'} styles={useStyles} {...props} />;
}

export type PlatesRatingProps = BaseBaseRatingProps;

// noinspection JSUnusedGlobalSymbols
export default PlatesRating;

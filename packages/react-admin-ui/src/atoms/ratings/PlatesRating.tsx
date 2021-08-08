import clsx from 'clsx';
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
    iconEmpty: {
        opacity: 0.25,
    },
});

const Icon = ({ color }: any) => <div className={clsx('w-16 h-2 mr-1', colors[(color as string) || 'primary'])} />;

export function PlatesRating(props: PlatesRatingProps) {
    return <BaseRating kind={'plates'} styles={useStyles} icon={Icon} labelPlacement={'bottom'} {...props} />;
}

export type PlatesRatingProps = BaseBaseRatingProps;

// noinspection JSUnusedGlobalSymbols
export default PlatesRating;

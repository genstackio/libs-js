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

const Icon = ({ color }: any) => <div className={clsx('w-2 h-6 mr-1', colors[(color as string) || 'primary'])} />;

export function UnitsRating(props: UnitsRatingProps) {
    return <BaseRating kind={'units'} styles={useStyles} {...props} icon={Icon} />;
}

export type UnitsRatingProps = BaseBaseRatingProps;

// noinspection JSUnusedGlobalSymbols
export default UnitsRating;

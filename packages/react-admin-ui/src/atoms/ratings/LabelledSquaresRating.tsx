import { useCallback } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import BaseRating, { BaseBaseRatingProps } from './BaseRating';

const colors = {
    primary: 'border border-primary',
    secondary: 'border border-secondary',
    success: 'border border-success',
    info: 'border border-info',
    warning: 'border border-warning',
    danger: 'border border-danger',
    light: 'border border-light',
    dark: 'border border-dark',
};

const useStyles = makeStyles({
    iconEmpty: {
        opacity: 0.25,
    },
});

export function LabelledSquaresRating(props: LabelledSquaresRatingProps) {
    const Container = useCallback(
        ({ className, children }) => {
            return (
                <div className={clsx('p-2 mr-1', colors[(props.color as string) || 'primary'], className)}>
                    {children}
                </div>
            );
        },
        [props.color],
    );

    return <BaseRating kind={'labelled-squares'} styles={useStyles} container={Container} {...props} />;
}

export type LabelledSquaresRatingProps = BaseBaseRatingProps;

export default LabelledSquaresRating;

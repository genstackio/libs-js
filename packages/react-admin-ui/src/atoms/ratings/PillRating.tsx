import { useCallback } from 'react';
import clsx from 'clsx';
import Div from '../Div';
import BaseRating, { BaseBaseRatingProps } from './BaseRating';
import { makeStyles } from '@material-ui/core/styles';

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

export function PillRating(props: PillRatingProps) {
    const Container = useCallback(
        ({ className, children }) => (
            <Div mr={'xs'} p={'sm'} className={clsx(colors[(props.color as string) || 'primary'], className)}>
                {children}
            </Div>
        ),
        [props.color],
    );

    return <BaseRating container={Container} kind={'pill'} styles={useStyles} {...props} />;
}

export type PillRatingProps = BaseBaseRatingProps;

export default PillRating;

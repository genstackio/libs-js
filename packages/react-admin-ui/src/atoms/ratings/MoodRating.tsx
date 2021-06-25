import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import BaseRating, { BaseBaseRatingProps } from './BaseRating';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

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

const Icon = ({ color }: any) => (
    <div className={clsx('w-6 rounded-full h-6 mr-1', colors[(color as string) || 'primary'])} />
);

export function MoodRating(props: MoodRatingProps) {
    const { t } = useTranslation();
    const values = useMemo(
        () => [
            { value: 'very-bad', label: t('mood_very_bad') },
            { value: 'bad', label: t('mood_bad') },
            { value: 'normal', label: t('mood_normal') },
            { value: 'good', label: t('mood_good') },
            { value: 'very-good', label: t('mood_very_good') },
        ],
        [t],
    );

    return <BaseRating kind={'mood'} styles={useStyles} values={values} {...props} icon={Icon} />;
}

export type MoodRatingProps = BaseBaseRatingProps;

export default MoodRating;

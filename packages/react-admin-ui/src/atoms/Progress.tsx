import React from 'react';
import { makeStyles, createStyles, withStyles, Theme } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import '../../assets/css/styles.css';
import CircularProgress from '@material-ui/core/CircularProgress';

const BorderLinearProgress = withStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 10,
      borderRadius: 5,
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: 'var(--primary-color)',
    },
  }),
)(LinearProgress);

const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
  });

export function Progress({variant = 'linear', progressValue = 0}: ProgressProps) {
  const classes = useStyles();
  switch (variant) {
      case 'circular':
          return (
              <div className={'relative inline-flex'}>
                  <CircularProgress variant="determinate" value={progressValue} color={'inherit'} size={75} thickness={5}/>
                  {progressValue && <div className={'absolute inset-0 flex justify-center items-center font-semibold'}>{progressValue.toString()+'%'}</div>}
              </div>
          );
      default:
      case 'linear':
          return (
            <div className={classes.root}>
              <BorderLinearProgress variant='determinate' value={progressValue} />
            </div>
          );
  }

}

export interface ProgressProps {
    variant?: 'linear' | 'circular',
    progressValue?: number,
}

export default Progress
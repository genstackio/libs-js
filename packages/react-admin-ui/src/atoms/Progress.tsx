import React from 'react';
import { makeStyles, createStyles, withStyles, Theme } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import '../../assets/css/styles.css';


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
      backgroundColor: 'var(--bg-color-progressbar)',
    },
  }),
)(LinearProgress);

const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
  });

export function Progress({progressValue}: ProgressProps) {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <BorderLinearProgress variant='determinate' value={progressValue} />
    </div>
  );
}

export interface ProgressProps {
    progressValue?: number,
}

export default Progress

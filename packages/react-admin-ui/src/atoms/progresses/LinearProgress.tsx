import { makeStyles, createStyles, withStyles, Theme } from '@material-ui/core/styles';
import MuiLinearProgress from '@material-ui/core/LinearProgress';

const BorderLinearProgress = withStyles((theme: Theme) => createStyles({
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
}))(MuiLinearProgress);

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});

export function LinearProgress({value = 0}: LinearProgressProps) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <BorderLinearProgress variant={'determinate'} value={value} />
        </div>
    );
}

export interface LinearProgressProps {
    value?: number,
}

export default LinearProgress
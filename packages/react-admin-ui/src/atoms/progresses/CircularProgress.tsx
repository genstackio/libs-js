import MuiCircularProgress from '@material-ui/core/CircularProgress';

export function CircularProgress({value = 0}: CircularProgressProps) {
  return (
      <div className={'relative inline-flex'}>
          <MuiCircularProgress variant={'determinate'} value={value} color={'inherit'} size={75} thickness={5} />
          {value && <div className={'absolute inset-0 flex justify-center items-center font-semibold'}>{value.toString() + '%'}</div>}
      </div>
  );
}

export interface CircularProgressProps {
    value?: number,
}

export default CircularProgress
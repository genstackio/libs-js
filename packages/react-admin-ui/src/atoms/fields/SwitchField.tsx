import FieldLabel from '../FieldLabel';
import FieldError from '../FieldError';
import FieldHelper from '../FieldHelper';
import useField from '../../hooks/useField';
import MuiSwitch from '@material-ui/core/Switch';
import { makeStyles } from '@material-ui/core/styles';
import {
    WithClassName,
    WithDefaultValues,
    WithDisabled,
    WithErrors,
    WithField,
    WithHelper,
    WithKind,
    WithLabel,
    WithName,
    WithOnChange,
    WithOptions,
    WithRegister,
    WithRequired,
} from '../../withs';

const useStyles = makeStyles({
    root: {
        width: 42,
        height: 26,
        padding: 0,
        margin: '1rem',
    },
    switchBase: {
        padding: 1,
        '&$checked': {
            transform: 'translateX(16px)',
            color: 'white',
            '& + $track': {
                backgroundColor: '#7366FF',
                opacity: 1,
                border: 'none',
            },
        },
        '&$focusVisible $thumb': {
            color: '#7366FF',
            border: '6px solid #fff',
        },
        '&$disabled': {
            color: '#EEEEEE',
            '& + $track': {
                backgroundColor: '#DADADA',
                opacity: 1,
                border: 'none',
            },
        },
    },
    thumb: {
        width: 24,
        height: 24,
    },
    track: {
        borderRadius: 26 / 2,
        border: '1px solid #DADADA',
        backgroundColor: '#FAFAFA',
        opacity: 1,
    },
    checked: {},
    focusVisible: {},
    disabled: {},
});

export function SwitchField({ className, onChange, ...props }: SwitchFieldProps) {
    const classes = useStyles(props);
    const { name, required, label, error, helper, disabled, register, options, defaultValue, extra } = useField(props);
    return (
        <div className={'mb-2'}>
            <MuiSwitch
                focusVisibleClassName={classes.focusVisible}
                disableRipple
                classes={{
                    root: classes.root,
                    switchBase: classes.switchBase,
                    thumb: classes.thumb,
                    track: classes.track,
                    checked: classes.checked,
                    disabled: classes.disabled,
                }}
                name={name}
                checked={defaultValue}
                onChange={onChange}
                disabled={disabled}
                required={required}
                {...register()}
                {...extra}
                className={className}
            />
            <FieldLabel name={name} label={label} options={options} />
            <FieldError error={error} />
            <FieldHelper helper={helper} />
        </div>
    );
}

export interface SwitchFieldProps
    extends WithClassName,
        WithRequired,
        WithErrors,
        WithDefaultValues,
        WithName,
        WithHelper,
        WithField,
        WithRegister,
        WithDisabled,
        WithLabel,
        WithOnChange,
        WithOptions,
        WithKind {}

export default SwitchField;

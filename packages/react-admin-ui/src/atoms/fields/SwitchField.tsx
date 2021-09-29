import FieldLabel from '../FieldLabel';
import FieldError from '../FieldError';
import FieldHelper from '../FieldHelper';
import useField from '../../hooks/useField';
import MuiSwitch from '@material-ui/core/Switch';
import { makeStyles } from '@material-ui/core/styles';
import { AsField } from '../../as';
import Div from '../Div';

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
    const muiClasses = useStyles(props);
    const { name, required, label, error, helper, disabled, register, options, defaultValue, extra, classes } =
        useField(props);

    return (
        <Div mt={'sm'} className={classes?.root}>
            <MuiSwitch
                checked={defaultValue}
                classes={{
                    root: muiClasses.root,
                    switchBase: muiClasses.switchBase,
                    thumb: muiClasses.thumb,
                    track: muiClasses.track,
                    checked: muiClasses.checked,
                    disabled: muiClasses.disabled,
                    ...classes?.switch,
                }}
                disabled={disabled}
                disableRipple
                focusVisibleClassName={muiClasses.focusVisible}
                name={name}
                onChange={onChange}
                required={required}
                {...register()}
                {...extra}
                className={className}
            />
            <FieldLabel name={name} label={label} options={options} className={classes?.label} />
            <FieldError error={error} className={classes?.error} />
            <FieldHelper helper={helper} className={classes?.helper} />
        </Div>
    );
}

export type SwitchFieldProps = AsField;

// noinspection JSUnusedGlobalSymbols
export default SwitchField;

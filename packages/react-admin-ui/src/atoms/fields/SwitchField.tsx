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
    const classes = useStyles(props);
    const { name, required, label, error, helper, disabled, register, options, defaultValue, extra } = useField(props);

    return (
        <Div mt={'sm'}>
            <MuiSwitch
                checked={defaultValue}
                classes={{
                    root: classes.root,
                    switchBase: classes.switchBase,
                    thumb: classes.thumb,
                    track: classes.track,
                    checked: classes.checked,
                    disabled: classes.disabled,
                }}
                disabled={disabled}
                disableRipple
                focusVisibleClassName={classes.focusVisible}
                name={name}
                onChange={onChange}
                required={required}
                {...register()}
                {...extra}
                className={className}
            />
            <FieldLabel name={name} label={label} options={options} />
            <FieldError error={error} />
            <FieldHelper helper={helper} />
        </Div>
    );
}

export type SwitchFieldProps = AsField;

// noinspection JSUnusedGlobalSymbols
export default SwitchField;

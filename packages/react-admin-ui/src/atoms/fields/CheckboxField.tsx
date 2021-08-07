import Checkbox from '@material-ui/core/Checkbox';
import Text from '../Text';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import useField from '../../hooks/useField';
import FieldSet from '../FieldSet';
import Row from '../Row';
import {
    WithClassName,
    WithDefaultValueAsBoolean,
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
        '&.MuiCheckbox-root:hover': {
            backgroundColor: 'transparent',
        },
        '&:not(.Mui-checked)': {
            color: '#000',
        },
        '&.Mui-checked': {
            color: '#000',
        },
        '&.Mui-checked:hover': {
            backgroundColor: 'transparent',
        },
        '&$disabled': {
            color: '#6B7280',
        },
    },
    checked: {},
    disabled: {},
});

export function CheckboxField({ className, onChange, ...props }: CheckboxFieldProps) {
    const classes = useStyles();
    const {
        name,
        label,
        required,
        error,
        helper,
        disabled,
        register,
        options,
        defaultValue = false,
        extra,
    } = useField(props, { kind: 'checkbox' });
    return (
        <FieldSet name={name} label={label} options={options} error={error} helper={helper} className={className}>
            <Row center>
                <Checkbox
                    checkedIcon={<CheckBoxOutlinedIcon />}
                    classes={classes}
                    disabled={disabled}
                    disableRipple
                    defaultChecked={defaultValue}
                    onChange={onChange}
                    name={name}
                    required={required}
                    {...register()}
                    {...extra}
                />
                <Text text={label} className={clsx(disabled && 'text-disabled')} />
            </Row>
        </FieldSet>
    );
}

export interface CheckboxFieldProps
    extends WithClassName,
        WithName,
        WithDisabled,
        WithHelper,
        WithRegister,
        WithRequired,
        WithErrors,
        WithField,
        WithLabel,
        WithOptions,
        WithOnChange,
        WithDefaultValueAsBoolean,
        WithKind {}

export default CheckboxField;

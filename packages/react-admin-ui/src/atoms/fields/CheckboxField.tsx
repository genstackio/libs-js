import Row from '../Row';
import Text from '../Text';
import FieldSet from '../FieldSet';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import useField from '../../hooks/useField';
import { AsFlagField } from '../../as';

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
        <FieldSet error={error} helper={helper} label={label} name={name} options={options} className={className}>
            <Row center responsive={false}>
                <Checkbox
                    checkedIcon={<CheckBoxOutlinedIcon />}
                    classes={classes}
                    defaultChecked={defaultValue}
                    disabled={disabled}
                    disableRipple
                    name={name}
                    onChange={onChange}
                    required={required}
                    {...register()}
                    {...extra}
                />
                <Text disabled={disabled} text={label} />
            </Row>
        </FieldSet>
    );
}

export type CheckboxFieldProps = AsFlagField;

// noinspection JSUnusedGlobalSymbols
export default CheckboxField;

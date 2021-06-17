import Checkbox from '@material-ui/core/Checkbox';
import Text from '../Text';
import {makeStyles} from "@material-ui/core/styles";
import clsx from "clsx";
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import {class_name, flag, register} from '../../types';
import {useField} from "../../hooks";
import FieldSet from "../FieldSet";

const useStyles = makeStyles({
    root: {
        "&.MuiCheckbox-root:hover": {
            backgroundColor: 'transparent',
        },
        "&:not(.Mui-checked)": {
            color: '#000',
        },
        "&.Mui-checked": {
            color: '#000',
        },
        "&.Mui-checked:hover": {
            backgroundColor: 'transparent',
        },
        "&$disabled": {
            color: '#6B7280',
        },
    },
    checked: {},
    disabled: {},
});

export function CheckboxField({className, onChange, ...props}: CheckboxFieldProps) {
    const classes = useStyles();
    const {name, label, required, error, helper, disabled, register, options, defaultValue = false, extra} = useField(props);
    return (
        <FieldSet className={className} name={name} label={label} options={options} error={error} helper={helper}>
            <div className={'flex items-center'}>
                <Checkbox checkedIcon={<CheckBoxOutlinedIcon/>} classes={classes}
                          disabled={disabled} disableRipple defaultChecked={defaultValue}
                          onChange={onChange}
                          name={name}
                          required={required}
                          {...register()}
                          {...extra}
                />
                <Text text={label} className={clsx(disabled && 'text-gray-500')} />
            </div>
        </FieldSet>
    );
}

export interface CheckboxFieldProps {
    className?: class_name,
    defaultValue?: flag,
    label?: string,
    name?: string,
    disabled?: flag,
    required?: flag,
    errors?: {[key: string]: any},
    helper?: string,
    options?: any,
    onChange?: Function,
    register: register,
    field?: boolean,
}

export default CheckboxField
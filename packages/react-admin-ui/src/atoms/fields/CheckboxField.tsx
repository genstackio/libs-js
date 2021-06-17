import Checkbox from '@material-ui/core/Checkbox';
import Text from '../Text';
import {makeStyles} from "@material-ui/core/styles";
import clsx from "clsx";
import {useMemo} from "react";
import {useTranslation} from "react-i18next";
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import {flag}from '../../types';

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

export function CheckboxField({defaultValue = true, label, name, disabled = false, required = false, helper, errors = {}, options = {}, onChange, register = () => ({})}: CheckboxFieldProps) {
    const classes = useStyles();
    const {t} = useTranslation();
    name = name || 'text';
    helper = helper ? t(helper) : t([`field_${name.toLowerCase()}_helper`, '']);
    const errorData = errors[name] || errors['all'];
    const error = !!errorData;
    const errorText = error ? (errorData.message || t(['constraints_required'])) : undefined;
    options = useMemo(() => ({
        ...options,
        required,
    }), [options, required]);
    return (
        <div>
            <div className={'flex items-center'}>
                <Checkbox checkedIcon={<CheckBoxOutlinedIcon/>} classes={classes} disabled={disabled} onChange={onChange} defaultChecked={defaultValue} {...register(name, options)} disableRipple />
                <Text text={label} className={clsx(disabled && 'text-gray-500')} />
            </div>
            {error && (<span className={'flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1'}>
                {errorText}
            </span>)}
            {helper && (<span className={'flex items-center font-medium tracking-wide text-xs mt-1 ml-1 text-gray-500'}>
                {helper}
            </span>)}
        </div>
    );
}

export interface CheckboxFieldProps {
    defaultValue?: flag,
    label?: string,
    name?: string,
    disabled?: flag,
    required?: flag,
    errors?: {[key: string]: any},
    helper?: string,
    options?: any,
    onChange?: Function,
    register: Function,
}

export default CheckboxField
import { useCallback, useState } from 'react';
import clsx from 'clsx';
import TextField, { TextFieldProps } from './TextField';
import Button from '../Button';
import { useTranslation } from 'react-i18next';
import { Controller } from 'react-hook-form';
import useField from '../../hooks/useField';

const classes = { input: 'w-14 pt-0 pb-0 pr-0 pl-0' };

export function ColorField({ className, inline = true, ...props }: ColorFieldProps) {
    const { name, defaultValue, control, extra } = useField({ name: 'color', ...props });
    const { t } = useTranslation();
    const [defined, setDefined] = useState(!!defaultValue);
    const handleClick = useCallback(() => {
        setDefined(true);
    }, [setDefined]);
    const handleChange = useCallback(
        (x) => (val) => {
            x && x(val.target.value);
        },
        [],
    );
    const handleReset = useCallback(
        (x) => () => {
            x && x('');
            setDefined(false);
        },
        [setDefined],
    );
    return (
        <Controller
            control={control}
            defaultValue={defaultValue}
            name={name}
            render={({ field: { ref, value, onChange, ...field } }: any) => {
                return !defined ? (
                    <Button onClick={handleClick} size={'xs'}>
                        {t('button_defined_label')}
                    </Button>
                ) : (
                    <div className={'flex items-center space-x-4'}>
                        <TextField
                            {...field}
                            name={name}
                            kind={'color'}
                            type={'color'}
                            onChange={handleChange(onChange)}
                            value={value || '#000000'}
                            className={clsx('', className)}
                            classes={classes}
                            inline={inline}
                            {...extra}
                        />
                        <Button
                            onClick={handleReset(onChange) as any}
                            size={'xs'}
                            variant={'outlined'}
                            color={'danger'}
                        >
                            {t('button_reset_label')}
                        </Button>
                    </div>
                );
            }}
        />
    );
}

export type ColorFieldProps = TextFieldProps;

// noinspection JSUnusedGlobalSymbols
export default ColorField;

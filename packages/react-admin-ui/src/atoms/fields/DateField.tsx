import {useTranslation} from "react-i18next";
import 'date-fns';
import {useCallback, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {KeyboardDatePicker, MuiPickersUtilsProvider,} from '@material-ui/pickers';

export function DateField({now}: DateFieldProps) {
    const {t} = useTranslation();
    const [selectedDate, setSelectedDate] = useState<Date | null>(
        new Date (now as Date)
    );

    const handleDateChange = useCallback((date: Date | null) => {
        setSelectedDate(date);
    }, [setSelectedDate]);

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify='space-around'>
                <KeyboardDatePicker
                    margin={'normal'}
                    label={t('form_data_field_label')}
                    format={t('form_data_field_format')}
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
            </Grid>
        </MuiPickersUtilsProvider>
    );
}

export interface DateFieldProps {
    now?: Date,
}

export default DateField

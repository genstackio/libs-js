import {useTranslation} from "react-i18next";
import 'date-fns';
import {useCallback, useState} from 'react';
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
            <KeyboardDatePicker
                label={t('field_date_label')}
                format={t('field_date_format')}
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    'aria-label': t('field_date_aria_label'),
                }}
            />
        </MuiPickersUtilsProvider>
    );
}

export interface DateFieldProps {
    now?: Date,
}

export default DateField

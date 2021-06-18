import CheckboxField, {CheckboxFieldProps} from "./CheckboxField";
import {useTranslation} from "react-i18next";

export function RememberPasswordField(props: RememberPasswordFieldProps) {
    const {t} = useTranslation();
    return (
        <CheckboxField name={'rememberPassword'} label={t('field_remember_password_label')} {...props} />
    );
}

export interface RememberPasswordFieldProps extends CheckboxFieldProps {
}

export default RememberPasswordField
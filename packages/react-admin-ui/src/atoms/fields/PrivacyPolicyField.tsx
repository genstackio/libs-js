import CheckboxField, { CheckboxFieldProps } from './CheckboxField';
import Text from '../Text';
import { useTranslation } from 'react-i18next';
import Clickable from '../Clickable';
import { WithTextColor } from '../../withs';

export function PrivacyPolicyField({ onClick, color, ...props }: PrivacyPolicyFieldProps) {
    const { t } = useTranslation();
    return (
        <>
            <CheckboxField kind={'privacyPolicy'} {...props} />
            <Clickable onClick={onClick as any} optional>
                <Text text={t('field_privacy_policy_description')} color={color} variant={'subsection'} />
            </Clickable>
        </>
    );
}

export interface PrivacyPolicyFieldProps extends CheckboxFieldProps, WithTextColor {
    onClick?: Function;
}

export default PrivacyPolicyField;

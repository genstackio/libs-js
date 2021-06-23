import CheckboxField, { CheckboxFieldProps } from './CheckboxField';
import { Text } from '../Text';
import { text_color } from '../../mappings/text-colors';
import { useTranslation } from 'react-i18next';

export function PrivacyPolicyField({ onClick, color, ...props }: PrivacyPolicyFieldProps) {
    const { t } = useTranslation();
    return (
        <>
            <CheckboxField kind={'privacyPolicy'} {...props} />
            {onClick && (
                <div onClick={onClick as any}>
                    <Text text={t('field_privacy_policy_description')} color={color} variant={'subsection'} />
                </div>
            )}
        </>
    );
}

export interface PrivacyPolicyFieldProps extends CheckboxFieldProps {
    onClick?: Function;
    color?: text_color;
}

export default PrivacyPolicyField;

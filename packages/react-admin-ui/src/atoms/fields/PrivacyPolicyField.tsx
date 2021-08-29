import { useTranslation } from 'react-i18next';
import Text from '../Text';
import Clickable from '../Clickable';
import CheckboxField, { CheckboxFieldProps } from './CheckboxField';
import { WithOnClick, WithColorOfText } from '../../withs';

export function PrivacyPolicyField({ color, onClick, ...props }: PrivacyPolicyFieldProps) {
    const { t } = useTranslation();

    return (
        <>
            <CheckboxField kind={'privacyPolicy'} {...props} />
            <Clickable onClick={onClick as any} optional>
                <Text color={color} text={t('field_privacy_policy_description')} variant={'subsection'} />
            </Clickable>
        </>
    );
}

export interface PrivacyPolicyFieldProps extends CheckboxFieldProps, WithColorOfText, WithOnClick {}

// noinspection JSUnusedGlobalSymbols
export default PrivacyPolicyField;

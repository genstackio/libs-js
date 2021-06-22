import {PasswordField, PasswordConfirmationField} from '../../atoms/fields';
import {useForm} from 'react-hook-form';
import {Button, Text} from '../../atoms';
import {useTranslation} from 'react-i18next';
import {box_color} from '../../mappings/box-colors';

export function ChangePasswordForm({defaultValues, onSubmit, color = 'primary'} : ChangePasswordFormProps) {
    const {t} = useTranslation();
    const {handleSubmit} = useForm({defaultValues});

    return (
        <div className={'w-full flex flex-col'}>
            <div className='w-full flex justify-center'>
                <form onSubmit={handleSubmit(onSubmit as any)} className={'w-full'}>
                    <Text text={t('form_change_password_title')} variant={'title6'} color={color} />
                    <Text className={'text-gray-500 mb-4'} text={t('form_change_password_subtitle')} variant={'body'} color={color} />
                    <PasswordField label={t('field_password_current_label')} />
                    <PasswordField label={t('field_password_new_label')} />
                    <PasswordConfirmationField label={t('field_passwordconfirmation_label')} />
                    <div className='flex justify-center mt-6'>
                        <Button className={'w-full items-center justify-center'} variant={'contained'} color={color}>{t('form_change_password_submit_label')}</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export interface ChangePasswordFormProps {
    color?: box_color,
    defaultValues?: any,
    onSubmit?: Function,
}

export default ChangePasswordForm

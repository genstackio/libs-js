import {
    EmailField,
    FirstNameField,
    LastNameField,
    PhoneField,
    AddressField,
    BirthDateField,
    GenderField
} from '../../atoms/fields';
import {useForm} from 'react-hook-form';
import {Button, Text} from '../../atoms';
import {useTranslation} from 'react-i18next';
import {box_color} from '../../mappings/box-colors';

export function UserProfileForm({defaultValues, onSubmit, color = 'primary'} : UserProfileFormProps) {
    const {t} = useTranslation();
    const {register, handleSubmit, formState: {errors}} = useForm({defaultValues});
    const field = {register, defaultValues, errors};
    return (
        <div className={'w-full flex flex-col'}>
            <div className='w-full flex justify-center'>
                <form onSubmit={handleSubmit(onSubmit as any)} className={'w-full'}>
                    <Text text={t('form_user_profile_title')} variant={'title6'} color={color} />
                    <Text className={'text-gray-500 mb-4'} text={t('form_user_profile_subtitle')} variant={'body'} color={color} />
                    <LastNameField {...field} autoFocus />
                    <FirstNameField {...field} />
                    <EmailField {...field} />
                    <AddressField {...field} />
                    <PhoneField {...field} />
                    <BirthDateField {...field} />
                    <GenderField {...field} />
                    <div className='flex justify-center mt-6'>
                        <Button className={'w-full items-center justify-center'} variant={'contained'} color={color}>{t('form_user_profile_submit_label')}</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export interface UserProfileFormProps {
    color?: box_color,
    defaultValues?: any,
    onSubmit?: Function,
}

export default UserProfileForm

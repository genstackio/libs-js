import {useForm} from "react-hook-form";
import {useTranslation} from "react-i18next";
import {box_color} from '../../mappings/box-colors';
import {LastNameField, CityField, AddressField, AdditionalAddressField, ZipCodeField, PhoneField, EmailField, UrlField, Text, Button} from "../../atoms";

export function OrganizationForm({onSubmit, color = 'primary', defaultValues = {}}: OrganizationFormProps) {
    const {t} = useTranslation();
    const {register, handleSubmit, formState: {errors}} = useForm({defaultValues});
    const field = {register, defaultValues, errors};
    return (
        <form onSubmit={handleSubmit(onSubmit as any)} className={'w-full'}>
            <Text text={t('form_organization_title')} variant={'title6'} color={color} />
            <Text text={t('form_organization_subtitle')} variant={'body'} color={color} />
            <LastNameField {...field} required autoFocus />
            <div className={'flex space-x-4 xs:flex-col xs:space-x-0'}>
                <AddressField {...field} required className={'w-1/2 xs:w-full'} />
                <AdditionalAddressField {...field} required className={'w-1/2 xs:w-full'} />
            </div>
            <div className={'flex space-x-4 xs:flex-col xs:space-x-0'}>
                <CityField {...field} required className={'w-1/2 xs:w-full'} />
                <ZipCodeField {...field} required className={'w-1/2 xs:w-full'} />
            </div>
            <div className={'flex space-x-4 xs:flex-col xs:space-x-0'}>
                <PhoneField {...field} required className={'w-1/2 xs:w-full'} />
                <EmailField {...field} required className={'w-1/2 xs:w-full'} />
            </div>
            <UrlField {...field} required />
            <Button className={'w-full justify-center mt-2'} variant={'contained'} color={color}>{t('form_organization_submit_label')}</Button>
        </form>
    );
}

export interface OrganizationFormProps {
    color?: box_color,
    defaultValues?: any,
    onSubmit?: Function,
}

export default OrganizationForm

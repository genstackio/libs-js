import {Icon, Text, Button} from "../atoms";
import {box_color, box_variant, target} from "../types";

export function MaintenanceTemplate({logo, title, description, actions = [], color = 'primary', variant = 'contained'}: MaintenanceTemplateProps) {
    return (
        <div className={'h-screen flex items-center'}>
            <div className={'text-center max-w-3xl mx-auto'}>
                <div className={'flex justify-center'}><Icon className={'text-gray-500'} icon={logo} size={200} /><Icon className={'text-gray-500'} icon={logo} size={60} /><Icon className={'text-gray-500'} icon={logo} size={120} /></div>
                <div className={'flex justify-center mb-4'}>
                    <Text text={title} variant={'title0'} color={color} />
                </div>
                <div className={'flex justify-center mb-10'}>
                    <Text text={description} variant={'body'} color={'dark'} />
                </div>
                {actions.map(({target, label}) => (
                    <Button color={color} variant={variant} onClick={target}>{label}</Button>
                ))}
            </div>
        </div>
    );
}

export interface MaintenanceTemplateProps {
    logo?: string,
    title?: string,
    description?: string,
    actions: {
        label?: string,
        target?: target,
    }[],
    color?: box_color,
    variant?: box_variant,
}

export default MaintenanceTemplate
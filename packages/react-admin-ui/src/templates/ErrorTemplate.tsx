import {box_color} from "../types";
import {Button, Icon, Text} from "../atoms";

export function ErrorTemplate({code, message, actions, icon, color}: ErrorTemplateProps) {
    return (
        <div className={'h-screen flex items-center'}>
            <div className={'text-center max-w-3xl mx-auto'}>
                {icon && <Icon icon={icon} size={100} className={`text-gray-300`} />}
                <Text text={`${code}`} variant={'title7'} color={color} />
                <Text text={message} variant={'subtitle'} />
                {actions && <div className={'x-buttons justify-center mt-6 sm:mt-4 xs:mt-2'}>
                    {actions.map(({target, label}) => (
                        <div className={'xs:mt-2 xs:w-full'}>
                            <Button color={color} variant={'contained'} onClick={target}>{label}</Button>
                        </div>
                    ))}
                </div>}
            </div>
        </div>
    );
}

export interface ErrorTemplateProps {
    code: number,
    message: string,
    actions?: {label?: string, target?: Function|string}[],
    icon?: string,
    color?: box_color,
}

export default ErrorTemplate
import { box_color, icon, target } from '../types';
import { Button, Icon, Text } from '../atoms';

export function ErrorTemplate({ actions, code, color, icon, message }: ErrorTemplateProps) {
    return (
        <div className={'h-screen flex items-center'}>
            <div className={'text-center max-w-3xl mx-auto'}>
                <Icon icon={icon} size={'8xl'} className={`text-gray-300`} />
                <Text text={`${code}`} variant={'title7'} color={color} />
                <Text text={message} variant={'subtitle'} />
                {actions && (
                    <div className={'x-buttons justify-center mt-6 sm:mt-4 xs:mt-2'}>
                        {actions.map(({ target, label }, i) => (
                            <div className={'xs:mt-2 xs:w-full'} key={i}>
                                <Button color={color} variant={'contained'} onClick={target}>
                                    {label}
                                </Button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export interface ErrorTemplateProps {
    actions?: {
        label?: string;
        target?: target;
    }[];
    color?: box_color;
    code: number;
    icon?: icon;
    message: string;
}

export default ErrorTemplate;

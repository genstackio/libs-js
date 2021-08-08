import clsx from 'clsx';
import { target } from '../types';
import Button from '../atoms/Button';
import Icon from '../atoms/Icon';
import Text from '../atoms/Text';
import { WithColorOfBox, WithIcon, WithMessage } from '../withs';
import { AsComponent } from '../as';

export function ErrorTemplate({ className, actions, code, color, icon, message }: ErrorTemplateProps) {
    return (
        <div className={clsx('h-screen flex items-center', className)}>
            <div className={'text-center max-w-3xl mx-auto'}>
                <Icon icon={icon} size={'8xl'} className={`text-disabled`} />
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

export interface ErrorTemplateProps extends AsComponent, WithColorOfBox, WithMessage, WithIcon {
    actions?: {
        label?: string;
        target?: target;
    }[];
    code: number;
}

// noinspection JSUnusedGlobalSymbols
export default ErrorTemplate;

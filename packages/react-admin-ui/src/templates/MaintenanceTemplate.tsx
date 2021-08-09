import clsx from 'clsx';
import Icon from '../atoms/Icon';
import Text from '../atoms/Text';
import Button from '../atoms/Button';
import { target } from '../types';
import { WithDescription, WithTitle } from '../withs';
import { AsBox } from '../as';

export function MaintenanceTemplate({
    className,
    logo,
    title,
    description,
    actions = [],
    color = 'primary',
    variant = 'contained',
}: MaintenanceTemplateProps) {
    return (
        <div className={clsx('h-screen flex items-center', className)}>
            <div className={'text-center max-w-3xl mx-auto'}>
                <div className={'flex justify-center'}>
                    <Icon className={'text-disabled'} icon={logo} size={'9xl'} />
                </div>
                <div className={'flex justify-center mb-4'}>
                    <Text text={title} variant={'title0'} color={color} />
                </div>
                <div className={'flex justify-center mb-10'}>
                    <Text text={description} variant={'body'} color={'dark'} />
                </div>
                {actions.map(({ target, label }, i) => (
                    <Button color={color} variant={variant} onClick={target} key={i}>
                        {label}
                    </Button>
                ))}
            </div>
        </div>
    );
}

export interface MaintenanceTemplateProps extends AsBox, WithTitle, WithDescription {
    logo?: string;
    actions: {
        label?: string;
        target?: target;
    }[];
}

// noinspection JSUnusedGlobalSymbols
export default MaintenanceTemplate;

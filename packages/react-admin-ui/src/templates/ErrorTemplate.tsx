import Button from '../atoms/Button';
import Icon from '../atoms/Icon';
import Text from '../atoms/Text';
import Div from '../atoms/Div';
import { target } from '../types';
import { AsComponent } from '../as';
import { WithColorOfBox, WithIcon, WithMessage } from '../withs';

export function ErrorTemplate({ actions, className, code, color, icon, message }: ErrorTemplateProps) {
    return (
        <Div center flex hscreen className={className}>
            <Div center col flex mx={'auto'} className={'max-w-3xl'} spaced={1}>
                <Icon disabled icon={icon} size={'8xl'} />
                <Text center color={color} text={`${code}`} variant={'title7'} />
                <Text center text={message} variant={'subtitle'} />
                {actions && (
                    <Div center flex mt={'lg'} spaced={420} wrap>
                        {actions.map(({ target, label }, i) => (
                            <Div auto key={i} mt={'_sm'}>
                                <Button color={color} onClick={target} variant={'contained'} label={label} />
                            </Div>
                        ))}
                    </Div>
                )}
            </Div>
        </Div>
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

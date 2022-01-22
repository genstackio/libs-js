import Row from '../atoms/Row';
import Div from '../atoms/Div';
import Icon from '../atoms/Icon';
import Text from '../atoms/Text';
import Items from '../atoms/Items';
import Button from '../atoms/Button';
import useItems from '../hooks/useItems';
import { buttonMap } from '../propMaps';
import { target } from '../types';
import { AsBox } from '../as';
import { WithDescription, WithTitle } from '../withs';

const defaultActions = [];

export function MaintenanceTemplate({
    actions = defaultActions,
    className,
    color = 'primary',
    description,
    logo,
    title,
    variant = 'contained',
    ...props
}: MaintenanceTemplateProps) {
    const [itProps] = useItems({ items: actions, ...props }, Button, { map: buttonMap, color, variant });

    return (
        <Row center hscreen className={className}>
            <Div center mx={'auto'} className={'max-w-3xl'}>
                <Div center flex>
                    <Icon disabled icon={logo} size={'9xl'} />
                </Div>
                <Div center flex mb={'md'}>
                    <Text color={color} text={title} variant={'title0'} />
                </Div>
                <Div center flex mb={'sl'}>
                    <Text color={'dark'} text={description} variant={'body'} />
                </Div>
                <Items {...itProps} />
            </Div>
        </Row>
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

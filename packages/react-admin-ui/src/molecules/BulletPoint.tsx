import Div from '../atoms/Div';
import Row from '../atoms/Row';
import Icon from '../atoms/Icon';
import Text from '../atoms/Text';
import { AsBox } from '../as';
import { WithIcon, WithText, WithTitle } from '../withs';

export function BulletPoint({ className, color, icon, text, title }: BulletPointProps) {
    return (
        <Row responsive={false} center className={className}>
            <Icon icon={icon} />
            <Div col ml={'md'}>
                <Text color={color} text={title} variant={'title5'} />
                <Text color={color} text={text} variant={'body'} />
            </Div>
        </Row>
    );
}

export interface BulletPointProps extends AsBox, WithIcon, WithText, WithTitle {}

// noinspection JSUnusedGlobalSymbols
export default BulletPoint;

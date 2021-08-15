import Icon from '../atoms/Icon';
import Text from '../atoms/Text';
import Column from '../atoms/Column';
import Row, { RowProps } from '../atoms/Row';
import { WithIcon, WithSubtitle, WithTitle } from '../withs';

export function VisualBulletBlockItem({
    icon,
    iconSize = '4xl',
    subtitle,
    title,
    ...props
}: VisualBulletBlockItemProps) {
    return (
        <Row center {...props}>
            <Icon icon={icon} size={iconSize} className={'mb-5'} />
            <Column ml={'md'}>
                <Text text={title} variant={'title6'} />
                <p>{subtitle || ''}</p>
            </Column>
        </Row>
    );
}

export interface VisualBulletBlockItemProps extends RowProps, WithIcon, WithTitle, WithSubtitle {}

// noinspection JSUnusedGlobalSymbols
export default VisualBulletBlockItem;

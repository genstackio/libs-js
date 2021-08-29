import Row from '../atoms/Row';
import Image from '../atoms/Image';
import Cell from '../atoms/Cell';
import { AsComponent } from '../as';
import { WithColorOfBox, WithLogo } from '../withs';

export function SmallFooter({ logo, ...props }: SmallFooterProps) {
    return (
        <Row size={'_sm-h'} {...props}>
            <Cell>
                <Image size={'xl-w'} {...logo} />
            </Cell>
        </Row>
    );
}

export interface SmallFooterProps extends AsComponent, WithLogo, WithColorOfBox {}

// noinspection JSUnusedGlobalSymbols
export default SmallFooter;

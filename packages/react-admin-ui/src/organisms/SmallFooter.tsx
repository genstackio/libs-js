import clsx from 'clsx';
import Row from '../atoms/Row';
import Image from '../atoms/Image';
import { WithBoxColor, WithLogo } from '../withs';

export function SmallFooter({ logo, color }: SmallFooterProps) {
    return (
        <Row className={clsx('max-h-14', `bg-${color}`)}>
            <div className={'flex-1'}>
                <Image className={clsx('w-40')} {...logo} />
            </div>
        </Row>
    );
}

export interface SmallFooterProps extends WithLogo, WithBoxColor {}

export default SmallFooter;

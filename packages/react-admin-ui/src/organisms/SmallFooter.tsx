import clsx from 'clsx';
import Row from '../atoms/Row';
import Image from '../atoms/Image';
import { WithColorOfBox, WithLogo } from '../withs';
import { AsComponent } from '../as';

export function SmallFooter({ className, logo, color }: SmallFooterProps) {
    return (
        <Row className={clsx('max-h-14', `bg-${color}`, className)}>
            {' '}
            {/* todo do not dynamically use bg-* */}
            <div className={'flex-1'}>
                <Image className={clsx('w-40')} {...logo} />
            </div>
        </Row>
    );
}

export interface SmallFooterProps extends AsComponent, WithLogo, WithColorOfBox {}

// noinspection JSUnusedGlobalSymbols
export default SmallFooter;

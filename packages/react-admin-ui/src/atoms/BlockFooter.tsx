import Row, { RowProps } from './Row';
import ButtonItems from './ButtonItems';
import useBox from '../hooks/useBox';
import { class_name } from '../types';

export function BlockFooter({ buttons = [], buttonsClassName, children, ...props }: BlockFooterProps) {
    const [box, rest] = useBox(props, { b: 'xs-t', color: 'primary', variant: 'filled', p: 'sl' });

    if (!children && !buttons.length) return null;

    return (
        <Row box={box} center spaced {...rest}>
            {children || ''}
            <ButtonItems items={buttons} className={buttonsClassName} />
        </Row>
    );
}

export interface BlockFooterProps extends RowProps {
    buttonsClassName?: class_name;
    buttons?: any[];
}

// noinspection JSUnusedGlobalSymbols
export default BlockFooter;

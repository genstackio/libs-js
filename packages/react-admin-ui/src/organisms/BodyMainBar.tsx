import Button from '../atoms/Button';
import Row from '../atoms/Row';
import Div from '../atoms/Div';
import Cell from '../atoms/Cell';
import { action_item } from '../types';
import { AsWrapper } from '../as';

export function BodyMainBar({ actions = [], children, className }: BodyMainBarProps) {
    return (
        <Row center responsive={false} spaced wrap className={className}>
            <Cell>{children}</Cell>
            <Div center spaced={420} wrap>
                {actions.map(({ target, ...action }, i) => (
                    <Div auto key={i} mt={'_sm'}>
                        <Button onClick={target} {...action} />
                    </Div>
                ))}
            </Div>
        </Row>
    );
}

export interface BodyMainBarProps extends AsWrapper {
    actions: action_item[];
}

// noinspection JSUnusedGlobalSymbols
export default BodyMainBar;

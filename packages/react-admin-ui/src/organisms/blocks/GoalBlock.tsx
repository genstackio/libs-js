import Badge from '../../atoms/Badge';
import Block, { BaseBlockProps } from '../../atoms/Block';
import Row from '../../atoms/Row';
import Column from '../../atoms/Column';
import Progress from '../../atoms/Progress';
import formatAmount from '../../utils/formatAmount';
import useBlock from '../../hooks/useBlock';

export function GoalBlock({ badgeLabel, unit, values, ...props }: GoalBlockProps) {
    const [bProps] = useBlock(props);
    const progressValue = Math.round((values.current / values.goal) * 100);

    return (
        <Block {...bProps}>
            <Row center spaced>
                <Column spaced={2}>
                    <Row center spacebetween spaced={4}>
                        <div className={'text-2xl font-semibold'}>{formatAmount(values.current, unit)}</div>
                        <Badge color={props.color} text={badgeLabel} type={'tag'} />
                    </Row>
                    <div className={'text-sm font-light'}>{values.text}</div>
                </Column>
                <Progress value={progressValue} variant={'circular'} />
            </Row>
        </Block>
    );
}

export interface GoalBlockProps extends BaseBlockProps {
    badgeLabel?: string;
    unit?: string;
    values: {
        current: number;
        goal: number;
        text?: string;
    };
}

// noinspection JSUnusedGlobalSymbols
export default GoalBlock;

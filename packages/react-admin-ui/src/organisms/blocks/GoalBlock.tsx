import { Badge, BaseBlockProps, Block, Progress } from '../../atoms';
import formatAmount from '../../utils/formatAmount';

export function GoalBlock({ badgeLabel, unit, values, ...props }: GoalBlockProps) {
    const progressValue = Math.round((values.current / values.goal) * 100);
    return (
        <Block {...props}>
            <div className={'flex justify-between items-center'}>
                <div className={'space-y-2'}>
                    <div className={'flex justify-between items-center space-x-4 xs:space-x-2'}>
                        <div className={'text-2xl font-semibold'}>{formatAmount(values.current, unit)}</div>
                        {badgeLabel && <Badge type={'tag'} color={props.color} text={badgeLabel} />}
                    </div>
                    <div className={'text-sm font-light'}>{values.text}</div>
                </div>
                <Progress variant={'circular'} value={progressValue} />
            </div>
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

export default GoalBlock;

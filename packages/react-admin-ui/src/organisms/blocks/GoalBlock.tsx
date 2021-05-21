import Block, {BaseBlockProps} from "../../atoms/Block";
import Badge from "../../atoms/Badge";
import Progress from "../../atoms/Progress";
import formatAmount from "../../utils/formatAmount";

export function GoalBlock({values, badgeLabel, unit, ...props}: GoalBlockProps) {
    const progressValue = Math.round((values.current / values.goal) * 100);
    return (
        <Block {...props}>
            <div className={'flex justify-between items-center'}>
                <div className={'space-y-2'}>
                    <div className={'flex justify-between items-center space-x-4 xs:space-x-2'}>
                        <div className={'text-2xl font-semibold'}>{formatAmount(values.current, unit)}</div>
                        {badgeLabel && <Badge variant={'tag'} color={props.color} text={badgeLabel} />}
                    </div>
                    <div className={'text-sm font-light'}>{values.text}</div>
                </div>
                <Progress variant={'circular'} value={progressValue} />
            </div>
        </Block>
    );
}

export interface GoalBlockProps extends BaseBlockProps {
    values: {current: number, goal: number, text?: string},
    badgeLabel?: string,
    unit?: string,
}

export default GoalBlock
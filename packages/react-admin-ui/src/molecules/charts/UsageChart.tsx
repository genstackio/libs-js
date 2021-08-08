import Progress from '../../atoms/Progress';
import { rich_text } from '../../types';
import { WithClassName, WithMax, WithValueAsNumber } from '../../withs';

export function UsageChart({ className, max, unit, value }: UsageChartProps) {
    return (
        <div className={className}>
            <Progress value={(value / max) * 100} />
            <div className={'flex justify-between items-center'}>
                <div className={'mt-2'}>
                    <p>
                        {value} {unit} / {max} {unit}
                    </p>
                </div>
            </div>
        </div>
    );
}

export interface UsageChartProps extends WithClassName, Required<WithMax>, Required<WithValueAsNumber> {
    unit?: rich_text;
}

// noinspection JSUnusedGlobalSymbols
export default UsageChart;

import Div from '../../atoms/Div';
import Progress from '../../atoms/Progress';
import { rich_text } from '../../types';
import { WithClassName, WithMax, WithValueAsNumber } from '../../withs';

export function UsageChart({ className, max, unit, value }: UsageChartProps) {
    return (
        <div className={className}>
            <Progress value={(value / max) * 100} />
            <Div center flex spaced>
                <Div mt={'sm'}>
                    <p>
                        {value} {unit} / {max} {unit}
                    </p>
                </Div>
            </Div>
        </div>
    );
}

export interface UsageChartProps extends WithClassName, Required<WithMax>, Required<WithValueAsNumber> {
    unit?: rich_text;
}

// noinspection JSUnusedGlobalSymbols
export default UsageChart;

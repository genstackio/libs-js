import Text from '../atoms/Text';
import Icon from '../atoms/Icon';
import Div from '../atoms/Div';
import { AsComponent } from '../as';
import { WithSubtitle, WithValueAsRichText } from '../withs';

export function StatsChartHeader({ className, subtitle, stats, value }: StatsChartHeaderProps) {
    return (
        <Div className={className}>
            {subtitle && (
                <Div center flex mb={'sm'} spaced>
                    <Div center flex spaced={2}>
                        <Text text={subtitle} variant={'body'} />
                        <Text color={'primary'} text={value} variant={'title6'} />
                    </Div>
                    <Icon icon={'settings'} className={'animate-spin'} />
                </Div>
            )}
            <Text color={'dark'} text={`${stats}`} variant={'title5'} />
        </Div>
    );
}

export interface StatsChartHeaderProps extends AsComponent, WithSubtitle, WithValueAsRichText {
    stats?: number;
}

// noinspection JSUnusedGlobalSymbols
export default StatsChartHeader;

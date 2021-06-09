import {BaseBlockProps, Block} from "../../atoms";
import {Text,Icon} from "../../atoms";
import {AreaChart, AreaChartProps} from "../../molecules";

export function AreaChartBlock({series, title, stats, subtitle, value,...props}: AreaChartBlockProps) {
    return (
        <Block {...props}>
            { subtitle && <div className={'flex justify-between items-center mb2'}>
                <div className={'flex items-center space-x-2'}>
                    <Text text={subtitle} variant={'body'} />
                    <Text text={value} color={'primary'} variant={'title6'} />
                </div>
                <Icon icon={'settings'} className={'animate-spin'}/>
            </div>}
            { stats && <Text text={`${stats}`} color={'dark'} variant={'title5'}/>}
            <AreaChart color={props.color} series={series}/>
        </Block>
    );
}

export interface AreaChartBlockProps extends BaseBlockProps, Omit<AreaChartProps, "color">{
    title?: string,
    stats?: number,
    subtitle?: string,
    value?: string,
}

export default AreaChartBlock;
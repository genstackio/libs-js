import SettingsIcon from '@material-ui/icons/Settings';
import {BaseBlockProps, Block, Text} from "../../atoms";
import {AreaChart, AreaChartProps} from "../../molecules";

export function AreaChartBlock({series, stats, subtitle, title, value, ...props}: AreaChartBlockProps) {
    return (
        <Block {...props}>
            { subtitle && <div className={'flex justify-between items-center mb2'}>
                <div className={'flex items-center space-x-2'}>
                    <Text text={subtitle} variant={'body'} />
                    <Text text={value} color={'primary'} variant={'title6'} />
                </div>
                <SettingsIcon className={'animate-spin'}/>
            </div>}
            { stats && <Text text={`${stats}`} color={'dark'} variant={'title5'}/>}
            <AreaChart color={props.color} series={series}/>
        </Block>
    );
}

export interface AreaChartBlockProps extends BaseBlockProps, Omit<AreaChartProps, "color">{
    stats?: number,
    subtitle?: string,
    title?: string,
    value?: string,
}

export default AreaChartBlock;
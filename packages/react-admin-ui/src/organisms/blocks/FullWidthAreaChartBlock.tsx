import SettingsIcon from '@material-ui/icons/Settings';
import {BaseBlockProps, Block, Text} from "../../atoms";
import  {AreaChart, AreaChartProps} from "../../molecules/charts";

export function FullWidthAreaChartBlock({overline, series, title, value,...props}: FullWidthAreaChartBlockProps) {
    return (
        <Block padding={"none"}{...props}>
            <div className={'p-10'}>
                { title && <div className={'flex justify-between items-center mb2'}>
                        <Text text={title} variant={'body'} />
                    <SettingsIcon className={'animate-spin'}/>
                </div>}
                { overline && <Text text={`${overline}`} color={'dark'} variant={'title5'}/>}
            </div>
            <AreaChart color={props.color} series={series}/>
        </Block>
    );
}

export interface FullWidthAreaChartBlockProps extends BaseBlockProps, Omit<AreaChartProps, "color">{
    overline?: string,
    subtitle?: string,
    title?: string,
    value?: string,
}

export default FullWidthAreaChartBlock;
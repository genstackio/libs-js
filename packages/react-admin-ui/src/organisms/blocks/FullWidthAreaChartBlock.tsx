import {BaseBlockProps, Block} from "../../atoms";
import Text from "../../atoms/Text";
import SettingsIcon from '@material-ui/icons/Settings';
import  {AreaChart, AreaChartProps} from "../../molecules";

export function FullWidthAreaChartBlock({series, title, overline, value,...props}: FullWidthAreaChartBlockProps) {
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
    title?: string,
    overline?: string,
    subtitle?: string,
    value?: string,
}

export default FullWidthAreaChartBlock;
import {BaseBlockProps, Block} from "../../atoms";
import {ProgressChart, ProgressChartProps} from "../../molecules";

export function ProgressChartBlock({series, progress, title, unit, value,...props}: ProgressChartBlockProps) {
    return (
        <Block padding={'none'} {...props}>
            <ProgressChart series={series} progress={progress} title={title} unit={unit} value={value}/>
        </Block>
    );
};

export interface ProgressChartBlockProps extends BaseBlockProps, ProgressChartProps{
}

export default ProgressChartBlock
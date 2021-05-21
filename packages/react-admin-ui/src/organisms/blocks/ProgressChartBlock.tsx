import Text from "../../atoms/Text";
import Chart from "react-apexcharts";
import {ApexOptions} from "apexcharts";
import formatAmount from "../../utils/formatAmount";
import Block, {BaseBlockProps} from "../../atoms/Block";
import ExpandLess from "../../atoms/icons/ExpandLessIcon";
import ExpandMore from "../../atoms/icons/ExpandMoreIcon";

export function ProgressChartBlock({title, progress, value, unit, chart,...props}: ProgressChartBlockProps) {
    return (
        <Block padding={'none'} {...props}>
            <div className={'p-10 flex justify-between items-center max-h-80'}>
                <div>
                    {title && <Text text={title} variant={'title6'} />}
                    {progress && <div className={'flex items-center'}>
                        <Text text={`${progress}%`} variant={'description'} />
                        {progress > 0 && <ExpandLess />}
                        {progress < 0 && <ExpandMore />}
                    </div>}
                </div>
                {value && <Text text={formatAmount(value, unit)} variant={'title5'} />}
            </div>
            <Chart height={180} options={chart} series={chart?.series} type="area" />
        </Block>
    );
}

export interface ProgressChartBlockProps extends BaseBlockProps {
    title?: string,
    progress?: number,
    value?: number,
    unit?: string,
    chart?: ApexOptions,
}

export default ProgressChartBlock
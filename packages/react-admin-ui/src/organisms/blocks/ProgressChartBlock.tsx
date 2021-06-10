import Chart from "react-apexcharts";
import {ApexOptions} from "apexcharts";
import formatAmount from "../../utils/formatAmount";
import {BaseBlockProps, Block, Icon, Text} from "../../atoms";

export function ProgressChartBlock({chart, progress, title, unit, value, ...props}: ProgressChartBlockProps) {
    return (
        <Block padding={'none'} {...props}>
            <div className={'p-10 flex justify-between items-center max-h-80'}>
                <div>
                    {title && <Text text={title} variant={'title6'} />}
                    {progress && <div className={'flex items-center'}>
                        <Text text={`${progress}%`} variant={'description'} />
                        {progress > 0 && <Icon icon={'expand_less_icon'} />}
                        {progress < 0 && <Icon icon={'expand_more_icon'} />}
                    </div>}
                </div>
                {value && <Text text={formatAmount(value, unit)} variant={'title5'} />}
            </div>
            <Chart height={180} options={chart} series={chart?.series} type="area" />
        </Block>
    );
}

export interface ProgressChartBlockProps extends BaseBlockProps {
    chart?: ApexOptions,
    progress?: number,
    title?: string,
    unit?: string,
    value?: number,
}

export default ProgressChartBlock
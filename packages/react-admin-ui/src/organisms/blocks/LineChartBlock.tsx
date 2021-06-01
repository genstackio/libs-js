import {BaseBlockProps, Block} from "../../atoms";
import {LineChart} from "../../molecules";

export function LineChartBlock({title, labels, series = [], description, ...props}: LineChartBlockProps) {
    return (
        <Block title={title} {...props}>
            <LineChart color={props.color} variant={props.variant} labels={labels} series={series} title={description} />
        </Block>
    );
}

export interface LineChartBlockProps extends BaseBlockProps {
    title?: string,
    description?: string,
    labels?: string[],
    series?: number[][],
}

export default LineChartBlock
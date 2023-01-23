import Chart, { ChartProps } from '../atoms/Chart';

export function ChartContent(props: ChartContentProps) {
    return <Chart {...props} />;
}

export type ChartContentProps = ChartProps;

export default ChartContent;

import {BaseBlockProps, Block} from "../../atoms";
import {FiguresChart, FiguresChartProps} from "../../molecules";

export function FiguresChartBlock({items, ...props}: FiguresBlockProps) {
    return (
        <Block padding={'none'} {...props}>
            <FiguresChart items={items}/>
        </Block>
    );
}

export interface FiguresBlockProps extends BaseBlockProps, FiguresChartProps {

}

export default FiguresChartBlock
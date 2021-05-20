import {ReactNode} from 'react';
import {PeriodBlock} from "../../atoms";
import {BaseBlockProps, Block} from "../../atoms";

export function PeriodFigureBlock({items=[], icon, ...props}: PeriodFigureBlockProps) {
    return (
        <Block {...props}>
            {icon && (
                <div className={'p-10 grid text-center grid-cols-' +`${items.length+1}`}>
                    {icon}
                    {items.map((item, index) => (
                        <PeriodBlock
                            key={index}
                            text={item.text}
                            value={item.value} />
                    ))}
                </div>
            )}
        </Block>

    );
}

export interface PeriodFigureBlockProps extends BaseBlockProps {
    icon?: ReactNode,
    items?: any[],
}

export default PeriodFigureBlock
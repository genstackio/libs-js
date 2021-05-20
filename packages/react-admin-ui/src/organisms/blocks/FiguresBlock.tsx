import {Block, Tag, Pill, BaseBlockProps} from "../../atoms";

export function FiguresBlock({title, price, pill, tag, ...props}: FiguresBlockProps) {
    return (
        <Block {...props}>
            <div className={'flex '}>
            <div>
                {title && <div className= {'text-2xl mr-8 inline-block'}>{title}</div>}
                <div className= {'inline-block'}>
                    <Tag text= { tag.text} color= {tag.color} />
                </div>
                <div className={'text-black font-black text-4xl mt-4'}>
                    {price}
                </div>
            </div>
            <div className={'absolute right-4'}>
                <Pill text= {pill.text} color= {pill.color} />
            </div>
            </div>
        </Block>
    );
}

export interface FiguresBlockProps extends BaseBlockProps {
    title?: string,
    price?: string,
    pill?: any,
    tag?: any,
}

export default FiguresBlock
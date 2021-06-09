import {Block, Tag, Pill, BaseBlockProps} from "../../atoms";
import {pill, tag} from '../../types';

export function FigureBlock({pill, price, tag, title, ...props}: FigureBlockProps) {
    return (
        <Block {...props}>
            <div className={'flex '}>
                <div>
                    {title && <div className= {'text-2xl mr-8 inline-block'}>{title}</div>}
                    {tag && <div className={'inline-block'}>
                        <Tag text={tag.text} color={tag.color} />
                    </div>}
                    <div className={'text-black font-black text-4xl mt-4'}>
                        {price}
                    </div>
                </div>
                {pill && <div className={'absolute right-4'}>
                    <Pill text={pill.text} color={pill.color} />
                </div>}
            </div>
        </Block>
    );
}

export interface FigureBlockProps extends BaseBlockProps {
    pill?: pill,
    price?: string,
    tag?: tag,
    title?: string,
}

export default FigureBlock
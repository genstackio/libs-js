import { Tag, Pill } from '../atoms';
import { class_name, pill, tag } from '../types';
import clsx from 'clsx';

export function Figure({ className, pill, price, tag, title }: FigureProps) {
    return (
        <div className={clsx('flex', className)}>
            <div>
                {title && <div className={'text-2xl mr-8 inline-block'}>{title}</div>}
                {tag && (
                    <div className={'inline-block'}>
                        <Tag text={tag.text} color={tag.color} />
                    </div>
                )}
                <div className={'text-black font-black text-4xl mt-4'}>{price}</div>
            </div>
            {pill && (
                <div className={'absolute right-4'}>
                    <Pill text={pill.text} color={pill.color} />
                </div>
            )}
        </div>
    );
}

export interface FigureProps {
    className?: class_name;
    pill?: pill;
    price?: string;
    tag?: tag;
    title?: string;
}

export default Figure;

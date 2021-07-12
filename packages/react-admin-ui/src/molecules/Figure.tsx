import clsx from 'clsx';
import Tag from '../atoms/Tag';
import Pill from '../atoms/Pill';
import Text from '../atoms/Text';
import { class_name, pill, tag } from '../types';

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
                <Text className={'text-dark font-black text-4xl mt-4'} text={`${price}`} />
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

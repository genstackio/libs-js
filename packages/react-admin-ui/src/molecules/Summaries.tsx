import { Text, Icon } from '../atoms';
import { box_color, class_name, icon } from '../types';
import clsx from 'clsx';

export function Summaries({ className, items }: SummariesProps) {
    return (
        <>
            {items && (
                <div className={clsx(`grid grid-flow-col grid-cols-${items.length} divide-x`, className)}>
                    {items.slice(0, 3).map(({ value, unit, color, percentage, icon }, index) => (
                        <div className={'text-center'} key={index}>
                            <div className={'flex justify-center'}>
                                <Text
                                    text={`${percentage}` + ' %'}
                                    variant={'description'}
                                    className={clsx('text-center')}
                                />
                                {percentage > 0 && <Icon icon={'keyboard_arrow_up'} />}
                                {percentage < 0 && <Icon icon={'keyboard_arrow_down'} />}
                            </div>
                            <Text text={unit} color={'dark'} variant={'description'} />
                            <Text text={value} color={'dark'} variant={'title6'} />
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}

export interface SummariesProps {
    className?: class_name;
    items?: {
        color: box_color;
        unit?: string;
        value?: string;
        percentage: number;
        icon?: icon;
    }[];
}

export default Summaries;

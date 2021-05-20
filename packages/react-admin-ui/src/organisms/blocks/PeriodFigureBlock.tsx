import React, {ReactNode} from 'react';
import clsx from "clsx";
import colorClass from "../../utils/colorClass";
import {box_color, box_variant} from "../../types";
import {PeriodBlock} from "../../atoms";

export function PeriodFigureBlock({items=[], icon, color, variant = 'contained'}: PeriodFigureBlockProps) {
    return (
        <div className={clsx('rounded-2xl shadow-block', colorClass({color, variant}))}>
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
        </div>
    );
}

export interface PeriodFigureBlockProps {
    icon?: ReactNode,
    color?: box_color,
    variant?: box_variant,
    items?: any[],
}

export default PeriodFigureBlock
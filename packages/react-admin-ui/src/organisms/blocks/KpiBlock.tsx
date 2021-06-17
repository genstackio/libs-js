import {useCallback, useState} from 'react';
import clsx from "clsx";
import {BaseBlockProps, Block, Icon} from "../../atoms";
import {Kpi} from "../../molecules";
import {icon} from '../../types';

export function KpiBlock({icon, name, quantity, bgIcon, ...props}: KpiBlockProps) {
    const [isHover, setIsHover] = useState(false);
    const onHover = useCallback(() => {
        setIsHover(true)
    }, [setIsHover]);
    const onLeave = useCallback(() => {
        setIsHover(false)
    }, [setIsHover]);

    return (
        <Block {...props}>
            <div className={'flex justify-between items-center'} onMouseOver={onHover} onMouseLeave={onLeave}>
                <Kpi icon={icon} name={name} quantity={quantity} color={props.color} />
                {bgIcon && (
                    <div className={clsx('absolute -right-5', isHover && 'transform -rotate-12 scale-110')}>
                        <Icon icon={bgIcon} />
                    </div>
                )}
            </div>
        </Block>
    );
}

export interface KpiBlockProps extends BaseBlockProps {
    bgIcon?: icon,
    icon?: icon,
    name?: string,
    quantity?: number,
}

export default KpiBlock
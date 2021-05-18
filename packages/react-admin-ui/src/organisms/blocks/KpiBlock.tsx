import {ReactNode, useCallback, useState} from 'react';
import Text from "../../atoms/Text";
import Icon from "../../atoms/Icon";
import Block from "../../atoms/Block";
import {box_color} from "../../types";
import clsx from "clsx";

export function KpiBlock({icon, name, quantity, bgIcon, color, variant = 'contained'}: KpiBlockProps) {
    const [isHover, setIsHover] = useState(false);
    const onHover = useCallback(() => {
        setIsHover(true)
    }, [setIsHover]);
    const onLeave = useCallback(() => {
        setIsHover(false)
    }, [setIsHover]);

    return (
        <Block variant={variant} color={color}>
            <div className={'flex justify-between items-center'} onMouseOver={onHover} onMouseLeave={onLeave}>
                <div className={'flex items-center space-x-6'}>
                    {icon && <Icon icon={icon} />}
                    {quantity && <div>
                        <Text text={name} variant={'description'} />
                        <Text text={`${quantity}`} variant={'title5'} />
                    </div>}
                </div>
                {bgIcon && <div className={clsx('absolute -right-5', isHover && 'transform -rotate-12 scale-110')}>
                    <Icon icon={bgIcon} />
                </div>}
            </div>
        </Block>
    );
}

export interface KpiBlockProps {
    icon?: string | ReactNode,
    name?: string,
    quantity?: number,
    bgIcon?: string | ReactNode,
    color?: box_color,
    variant?: 'contained',
}

export default KpiBlock
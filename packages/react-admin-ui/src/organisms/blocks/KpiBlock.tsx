import {ReactNode, useCallback, useState} from 'react';
import clsx from "clsx";
import {BaseBlockProps, Block, Icon, Text} from "../../atoms";

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

export interface KpiBlockProps extends BaseBlockProps {
    bgIcon?: ReactNode,
    icon?: ReactNode,
    name?: string,
    quantity?: number,

}

export default KpiBlock
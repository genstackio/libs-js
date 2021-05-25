import {ReactNode} from 'react';
import {BaseBlockProps, Block} from "../atoms";
import Icon from "../atoms/Icon";

export function TextBlock({title, text, icon, ...props}: TextBlockProps) {
    return (
        <Block {...props}>
                {title && (
                    <div className={'flex justify-between items-center'}>
                        <div className={'flex-col'}>
                            <h5 className={'text-2xl flex-1'}>{title}</h5>
                            <div className={'text-md flex-1'}>
                                <p>{text || ''}</p>
                            </div>
                        </div>
                        {icon && <Icon icon={icon} />}
                    </div>
                )}
        </Block>
    );
}

export interface TextBlockProps extends BaseBlockProps {
    icon?: string | ReactNode,
    title?: ReactNode,
    text?: ReactNode,
}

export default TextBlock
import {BaseBlockProps, Block, Icon} from "../atoms";
import {rich_text} from "../types";

export function TextBlock({icon, text, title,  ...props}: TextBlockProps) {
    return (
        <Block {...props}>
                {title && (
                    <div className={'flex justify-between items-center'}>
                        <div className={'flex-col'}>
                            {title && <h5 className={'text-2xl flex-1'}>{title}</h5>}
                            <div className={'text-md flex-1'}>
                                <p>{text || ''}</p>
                            </div>
                        </div>
                        <Icon icon={icon} />
                    </div>
                )}
        </Block>
    );
}

export interface TextBlockProps extends BaseBlockProps {
    icon?: string,
    text?: rich_text,
    title?: rich_text,
}

export default TextBlock
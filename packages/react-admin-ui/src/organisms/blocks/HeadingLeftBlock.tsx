import {BaseBlockProps, Block, Text} from "../../atoms";

export function HeadingLeftBlock({btnLabel, description, subtitle, title, ...props}: HeadingLeftBlockProps) {
    return (
        <Block {...props} title={title} btnLabel={btnLabel}>
            <div className={'space-y-2'}>
                <Text text={subtitle} variant={'body'} />
                <Text text={description} variant={'description'} />
            </div>
        </Block>
    );
}

export interface HeadingLeftBlockProps extends BaseBlockProps {
    btnLabel?: string,
    description?: string,
    subtitle?: string,
    title?: string,

}

export default HeadingLeftBlock
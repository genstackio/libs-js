import Text from "../../atoms/Text";
import Block, {BaseBlockProps} from "../../atoms/Block";

export function HeadingLeftBlock({title, subtitle, description, btnLabel, ...props}: HeadingLeftBlockProps) {
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
    title?: string,
    subtitle?: string,
    description?: string,
    btnLabel?: string,
}

export default HeadingLeftBlock
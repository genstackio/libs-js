import {BaseBlockProps, Block, Button} from "../../atoms";

export function NewsBlock({btnLabel, dropdownItems, items = [], title, ...props}: NewsBlockProps) {
    return (
        <Block padding={'none'} {...props} title={title} dropdownItems={dropdownItems}>
            {items.map(({title, content}, index) => (
                <div key={index} className={'px-8 py-6 border-b-1 xs:px-4 xs:py-3'}>
                    <div className={'font-semibold text-lg'}>{title}</div>
                    <div className={'font-normal text-sm'}>{content}</div>
                </div>
            ))}
            {btnLabel && <div className={'flex justify-center mt-4 xs:mt-2'}>
                <Button color={props.color}>{btnLabel}</Button>
            </div>}
        </Block>
    );
}

export interface NewsBlockProps extends BaseBlockProps  {
    btnLabel?: string,
    dropdownItems?: {
        name?: string
    }[],
    items?: {
        title?: string,
        content?: string
    }[],
    title?: string,

}

export default NewsBlock
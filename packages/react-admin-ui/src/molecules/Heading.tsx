import {rich_text} from "../types";

export function Heading({text}: HeadingProps) {
    return (
        <>
            <div className={'flex justify-between items-center border-b-2 my-8'}>
                <div className={'flex-col my-8'}>
                    <h5 className={'flex-1 text-2xl'}>{text}</h5>
                </div>
            </div>
        </>
    )
}

export interface HeadingProps {
    text?: rich_text,
}

export default Heading
import React from 'react';
import {Button} from "../../atoms";
import Block from "../../atoms/Block";
import {box_color, box_variant} from "../../types";

export function NewsBlock({color, variant = 'filled', title, items = [], btnLabel, dropdownItems}: NewsBlockProps) {
    return (
        <Block variant={variant} color={color} title={title} dropdownItems={dropdownItems}>
            {items.map(({title, content}, index) => (
                <div key={index} className={'px-8 py-6 border-b-1 xs:px-4 xs:py-3'}>
                    <div className={'font-semibold text-lg'}>{title}</div>
                    <div className={'font-normal text-sm'}>{content}</div>
                </div>
            ))}
            {btnLabel && <div className={'flex justify-center mt-4 xs:mt-2'}>
                <Button color={color}>{btnLabel}</Button>
            </div>}
        </Block>
    );
}

export interface NewsBlockProps {
    title?: string,
    items?: {title?: string, content?: string}[],
    btnLabel?: string,
    dropdownItems?: {name?: string}[],
    color?: box_color,
    variant?: box_variant,
}

export default NewsBlock
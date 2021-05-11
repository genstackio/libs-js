import React from 'react';
import clsx from "clsx";
import colorClass from "../utils/colorClass";
import {box_color, box_variant} from "../types";
import MuiAccordion from "@material-ui/core/Accordion";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';

export function Accordion({items = [], color, variant = 'contained'}: AccordionProps) {
    return (
        <div>
            {items.map(({icon, title, content}, index) => (
                <MuiAccordion key={index} className={'rounded-b-md mb-2'}>
                    <MuiAccordionSummary
                        expandIcon={<ExpandMoreIcon className={clsx(colorClass({color, variant}))} />}
                        aria-controls={`panel${index}-content`} id={`panel${index}-header`}
                        className={clsx('rounded-t-md', colorClass({color, variant}))}
                    >
                        <div className={'flex flex-row items-center space-x-2'}>
                            {icon && <img src={icon} alt={title} />}
                            <div className={'font-bold'}>{title}</div>
                        </div>
                    </MuiAccordionSummary>
                    <MuiAccordionDetails className={'py-3 px-4 shadow-container'}>
                        <div className={'text-sm tracking-wider'}>{content}</div>
                    </MuiAccordionDetails>
                </MuiAccordion>
            ))}
        </div>
    );
}

export interface AccordionProps {
    items: {icon?: string, title?: string, content?: string}[]
    color?: box_color,
    variant?: box_variant,
}

export default Accordion
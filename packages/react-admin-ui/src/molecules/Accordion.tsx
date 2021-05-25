import clsx from "clsx";
import colorClass from "../utils/colorClass";
import {box_color, box_variant, badge} from "../types";
import {makeStyles} from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import {Icon, Badge} from "../atoms";
import {ChangeEvent, useState, useCallback} from "react";

const useStyles = makeStyles({
    root: {
        '&.MuiAccordion-root:before': {
            backgroundColor: 'transparent'
        }
    }
});

export function Accordion({items = [], color, variant, expandIcon}: AccordionProps) {
    const classes = useStyles();
    const [expanded, setExpanded] = useState<number | false>(false);
    const handleChange = useCallback((panel: number) => (event: ChangeEvent<{}>, newExpanded: boolean) => {
        setExpanded(newExpanded ? panel : false)}, [setExpanded]);
    return (
        <div>
            {items.map(({icon, title, badge, content}, index) => (
                <MuiAccordion elevation={0} key={index} classes={classes} className={clsx(classes.root, 'rounded-t-md mb-2')} square={true} expanded={expanded === index} onChange={handleChange(index)}>
                    <MuiAccordionSummary
                        expandIcon={expandIcon ? <Icon className={clsx(colorClass({color, variant}))} icon={expandIcon} />:undefined}
                        aria-controls={`panel${index}-content`} id={`panel${index}-header`}
                        className={clsx('rounded-t-md', colorClass({color, variant}))}>
                        <div className={'w-full flex justify-between items-center'}>
                            <div className={'flex justify-between items-center space-x-2'}>
                                {icon && <Icon icon={icon} />}
                                <div className={'font-bold'}>{title}</div>
                            </div>
                            {badge && <Badge color={badge.color} variant={badge.variant} type={badge.type} text={badge.label} />}
                        </div>
                    </MuiAccordionSummary>
                    <MuiAccordionDetails className={'py-3 px-4'}>
                        {typeof content === 'string' && <div className={'text-sm tracking-wider'}>{content}</div>}
                        {Array.isArray(content) &&
                        <div className={'flex flex-col space-y-4'}>
                            {content.map(({label, target}, index) => (
                                <a key={index} className={'text-gray-400'} href={target}>-  {label}</a>
                            ))}
                        </div>
                        }
                    </MuiAccordionDetails>
                </MuiAccordion>
            ))}
        </div>
    );
}

export interface AccordionProps {
    items: {icon?: string, title?: string, badge?: badge, content?: string | any[]}[]
    color?: box_color,
    variant?: box_variant,
    expandIcon?: string,
}

export default Accordion
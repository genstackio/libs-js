import clsx from "clsx";
import colorClass from "../utils/colorClass";
import {box_color, box_variant} from "../types";
import {makeStyles} from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import {Icon} from "../atoms";

const useStyles = makeStyles({
    root: {
        '&.MuiAccordion-root:before': {
            backgroundColor: 'transparent'
        }
    }
});

export function Accordion({items = [], color, variant = 'contained'}: AccordionProps) {
    const classes = useStyles();
    return (
        <div>
            {items.map(({icon, title, content}, index) => (
                <MuiAccordion elevation={0} key={index} classes={classes} className={clsx(classes.root, 'rounded-t-md mb-2')} square={true}>
                    <MuiAccordionSummary
                        expandIcon={<ExpandMoreIcon className={clsx(colorClass({color, variant}))} />}
                        aria-controls={`panel${index}-content`} id={`panel${index}-header`}
                        className={clsx('rounded-t-md', colorClass({color, variant}))}
                    >
                        <div className={'flex flex-row items-center space-x-2'}>
                            {icon && <Icon icon={icon} />}
                            <div className={'font-bold'}>{title}</div>
                        </div>
                    </MuiAccordionSummary>
                    <MuiAccordionDetails className={'py-3 px-4'}>
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
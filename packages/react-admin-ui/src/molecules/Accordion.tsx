import { ChangeEvent, useState, useCallback } from 'react';
import clsx from 'clsx';
import textClass from '../utils/textClass';
import buttonClass from '../utils/buttonClass';
import { accordion_item, accordion_variant, class_name, text_color } from '../types';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Clickable from '../atoms/Clickable';
import Icon from '../atoms/Icon';
import Badge from '../atoms/Badge';
import Text from '../atoms/Text';
import { BoxProvider } from '@genstackio/react-contexts/lib/contexts/BoxContext';

const StyledAccordion = withStyles({
    root: {
        '&.MuiAccordion-root:before': {
            backgroundColor: 'transparent',
        },
        '&$expanded': {
            margin: 'auto',
        },
    },
    expanded: {
        backgroundColor: 'hsla(250, 100%, 50%, 0.3)',
    },
})(MuiAccordion);

const StyledAccordionSummary = withStyles({
    root: {
        minHeight: 56,
        '&$expanded': {
            minHeight: 56,
        },
    },
    content: {
        '&$expanded': {
            margin: '12px 0',
        },
    },
    expandIcon: {
        '&$expanded': {
            transform: 'rotate(90deg)',
        },
    },
    expanded: {},
})(MuiAccordionSummary);

export function Accordion({
    className,
    color = 'primary',
    expandIcon,
    items = [],
    variant = 'contained',
}: AccordionProps) {
    const [expanded, setExpanded] = useState<number | false>(false);
    const handleChange = useCallback(
        (panel: number) => (event: ChangeEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        },
        [setExpanded],
    );
    const box = { color, variant };
    return (
        <div className={clsx(className)}>
            {items.map(({ icon, title, badge, content }, index) => (
                <StyledAccordion
                    elevation={0}
                    key={index}
                    className={clsx('rounded-t-md mb-2', variant === 'light' && 'rounded-md mb-0')}
                    square
                    expanded={expanded === index}
                    onChange={handleChange(index) as any}
                >
                    <StyledAccordionSummary
                        expandIcon={<Icon className={textClass({ color, variant })} icon={expandIcon} />}
                        aria-controls={`panel${index}-content`}
                        id={`panel${index}-header`}
                        className={clsx(
                            'rounded-t-md',
                            variant === 'light' && 'rounded-md',
                            buttonClass({ color, variant }),
                        )}
                    >
                        <BoxProvider value={box}>
                            <div className={'w-full flex justify-between items-center'}>
                                <div className={'flex justify-between items-center space-x-2'}>
                                    <Icon icon={icon} />
                                    <Text variant={'subsection'} text={title} />
                                </div>
                                {badge && <Badge {...badge} />}
                            </div>
                        </BoxProvider>
                    </StyledAccordionSummary>
                    <MuiAccordionDetails className={'py-3 px-4 bg-white'}>
                        {typeof content === 'string' && <div className={'text-sm tracking-wider'}>{content}</div>}
                        {Array.isArray(content) && (
                            <div className={'flex flex-col space-y-4'}>
                                {(content as any[]).map(({ label, target }, index) => (
                                    <Clickable key={index} className={textClass({ color, variant })} onClick={target}>
                                        - {label}
                                    </Clickable>
                                ))}
                            </div>
                        )}
                    </MuiAccordionDetails>
                </StyledAccordion>
            ))}
        </div>
    );
}

export interface AccordionProps {
    className?: class_name;
    color?: text_color;
    expandIcon?: string;
    items: accordion_item[];
    variant?: accordion_variant;
}

export default Accordion;

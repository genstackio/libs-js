import clsx from 'clsx';
import Div from '../atoms/Div';
import Icon from '../atoms/Icon';
import Text from '../atoms/Text';
import Badge from '../atoms/Badge';
import Column from '../atoms/Column';
import Clickable from '../atoms/Clickable';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import textClass from '../utils/textClass';
import buttonClass from '../utils/buttonClass';
import {
    accordionCornerClass,
    accordionDetailsCornerClass,
    accordionSummaryCornerClass,
} from '../mappings/accordion-corners';
import { BoxProvider } from '@genstackio/react-contexts/lib/contexts/BoxContext';
import { AsComponent } from '../as';
import {
    WithExpandIcon,
    WithBadge,
    WithContent,
    WithIcon,
    WithTitle,
    WithNativeOnChange,
    WithCornerOfAccordion,
} from '../withs';

const StyledAccordion = withStyles({
    root: {
        '&.MuiAccordion-root:before': {
            backgroundColor: 'transparent',
        },
        '&$expanded': {
            margin: 'auto',
            marginBottom: '0.875rem',
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

export function AccordionItem({
    active,
    badge,
    box,
    content,
    corner,
    expandIcon,
    icon,
    index,
    onChange,
    title,
}: AccordionItemProps) {
    return (
        <StyledAccordion
            elevation={0}
            expanded={active}
            onChange={onChange}
            square
            className={clsx(
                accordionCornerClass(corner, { active }),
                'mb-2',
                box.variant === 'light' && 'rounded-md mb-0',
            )}
        >
            <StyledAccordionSummary
                aria-controls={`panel${index}-content`}
                expandIcon={<Icon className={textClass(box)} icon={expandIcon} />}
                id={`panel${index}-header`}
                className={clsx(
                    accordionSummaryCornerClass(corner, { active }),
                    box.variant === 'light' && 'rounded-md',
                    buttonClass(box),
                )}
            >
                <BoxProvider value={box}>
                    <Div center flex full spacebetween>
                        <Div center flex spacebetween spaced={2}>
                            <Icon icon={icon} />
                            <Text text={title} variant={'subsection'} />
                        </Div>
                        {badge && <Badge {...badge} />}
                    </Div>
                </BoxProvider>
            </StyledAccordionSummary>
            <MuiAccordionDetails
                className={clsx(
                    accordionDetailsCornerClass(corner, { active }),
                    'border-l border-r border-b py-3 px-4 bg-clear',
                )}
            >
                {!Array.isArray(content) && <div className={'text-sm tracking-wider'}>{content}</div>}
                {Array.isArray(content) && (
                    <Column spaced={4}>
                        {(content as any[]).map(({ label, target }, index) => (
                            <Clickable key={index} className={textClass(box)} onClick={target}>
                                - {label}
                            </Clickable>
                        ))}
                    </Column>
                )}
            </MuiAccordionDetails>
        </StyledAccordion>
    );
}

export interface AccordionItemProps
    extends AsComponent,
        WithBadge,
        WithContent,
        WithCornerOfAccordion,
        WithIcon,
        WithNativeOnChange,
        WithTitle,
        WithExpandIcon {
    active?: any;
    box?: any;
    index?: any;
}

// noinspection JSUnusedGlobalSymbols
export default AccordionItem;

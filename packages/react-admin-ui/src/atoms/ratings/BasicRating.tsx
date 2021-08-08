import { withStyles } from '@material-ui/core/styles';
import RatingUI from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { WithDefaultValueAsNumber, WithOnChange, WithText, WithValueAsNumber } from '../../withs';
import { AsComponent } from '../../as';

const StyledRating = withStyles({
    iconFilled: {
        color: 'var(--primary-color)',
    },
    iconHover: {
        color: 'var(--hover-color)',
    },
    root: {
        verticalAlign: 'middle',
    },
})(RatingUI);

export function BasicRating({ className, defaultValue, onChange, text, value }: BasicRatingProps) {
    const readOnly = value ? true : undefined;
    return (
        <Box component={'fieldset'} borderColor={'transparent'} className={className}>
            {text && <Typography component={'legend'}>{text}</Typography>}
            <StyledRating
                name={readOnly ? 'basic-rating' : undefined}
                defaultValue={defaultValue}
                value={value}
                precision={0.5}
                emptyIcon={<StarBorderIcon fontSize={'inherit'} />}
                onChange={onChange as any}
                readOnly={readOnly}
            />
        </Box>
    );
}

export interface BasicRatingProps
    extends AsComponent,
        WithText,
        WithOnChange,
        WithDefaultValueAsNumber,
        WithValueAsNumber {}

// noinspection JSUnusedGlobalSymbols
export default BasicRating;

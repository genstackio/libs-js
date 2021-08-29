import { withStyles } from '@material-ui/core/styles';
import RatingUI from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { AsComponent } from '../../as';
import { WithDefaultValueAsNumber, WithOnChange, WithText, WithValueAsNumber } from '../../withs';

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
        <Box borderColor={'transparent'} component={'fieldset'} className={className}>
            {text && <Typography component={'legend'}>{text}</Typography>}
            <StyledRating
                defaultValue={defaultValue}
                emptyIcon={<StarBorderIcon fontSize={'inherit'} />}
                name={readOnly ? 'basic-rating' : undefined}
                onChange={onChange as any}
                precision={0.5}
                readOnly={readOnly}
                value={value}
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

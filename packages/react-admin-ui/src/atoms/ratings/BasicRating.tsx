import { withStyles } from '@material-ui/core/styles';
import RatingUI from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { WithClassName, WithOnChange, WithText } from '../../withs';

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
                defaultValue={defaultValue ? parseInt(defaultValue as any) : undefined}
                value={value ? parseInt(value as any) : undefined}
                precision={0.5}
                emptyIcon={<StarBorderIcon fontSize={'inherit'} />}
                onChange={onChange as any}
                readOnly={readOnly}
            />
        </Box>
    );
}

export interface BasicRatingProps extends WithClassName, WithText, WithOnChange {
    defaultValue?: number | string;
    value?: number | string;
}

export default BasicRating;

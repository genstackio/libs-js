import { withStyles } from '@material-ui/core/styles';
import RatingUI from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const StyledRating = withStyles({
  iconFilled: {
    color: 'var(--primary-color)',
  },
  iconHover: {
    color: 'var(--hover-color)',
  },
})(RatingUI);

export function Rating({text, defaultValue, value, onChange}: RatingProps) {
  return (
    <div>
        <Box component="fieldset" mb={3} borderColor="transparent">
            <Typography component="legend">{text}</Typography>
            <StyledRating name="customized-color"
                          defaultValue={defaultValue}
                          value={value}
                          precision={0.5}
                          emptyIcon={<StarBorderIcon fontSize="inherit" />}
                          onChange={onChange}
            />
        </Box>
    </div>
    
  );
}

export interface RatingProps {
    text?: string,
    defaultValue?: number,
    value?: number,
    onChange?: any,
}

export default Rating

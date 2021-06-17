import { withStyles } from '@material-ui/core/styles';
import RatingUI from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {ChangeEvent} from "react";
import {flag, rich_text} from "../types";

const StyledRating = withStyles({
  iconFilled: {
    color: 'var(--primary-color)',
  },
  iconHover: {
    color: 'var(--hover-color)',
  },
  root: {
      verticalAlign: 'middle',
  }
})(RatingUI);

export function Rating({defaultValue, onChange, readOnly = false, text, value}: RatingProps) {
  return (
    <div>
        <Box component={'fieldset'} borderColor={'transparent'}>
            {text && <Typography component={'legend'}>{text}</Typography>}
            <StyledRating name={'customized-color'}
                          defaultValue={defaultValue}
                          value={value}
                          precision={0.5}
                          emptyIcon={<StarBorderIcon fontSize={'inherit'} />}
                          onChange={onChange}
                          readOnly={readOnly}
            />
        </Box>
    </div>
  );
}

export interface RatingProps {
    defaultValue?: number,
    onChange?: (
        event: ChangeEvent<{}>,
        value: number | null
    ) => void,
    readOnly?: flag,
    text?: rich_text,
    value?: number,
}

export default Rating

import { useCallback, useState, ChangeEvent } from 'react';
import clsx from 'clsx';
import buttonClass from '../utils/buttonClass';
import textClass from '../utils/textClass';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import { WithItemsOfDropdown } from '../withs';
import { AsBox } from '../as';

const useStyles = makeStyles({
    root: {
        '&:focus': {
            borderRadius: '0.5rem',
        },
    },
});

export function Dropdown({ className, color, items = [], variant }: DropdownProps) {
    const classes = useStyles();
    const [value, setValue] = useState<string | number | undefined>(items[0]?.name);
    const [open, setOpen] = useState(false);
    const handleChange = useCallback(
        (event: ChangeEvent<{ value: unknown }>) => {
            setValue(event.target.value as number);
        },
        [setValue, value],
    );
    const handleClose = useCallback(() => {
        setOpen(false);
    }, [setOpen]);
    const handleOpen = useCallback(() => {
        setOpen(true);
    }, [setOpen]);

    if (!items || !items.length) return null;
    return (
        <div className={className}>
            <Select
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                defaultValue={value}
                onChange={handleChange}
                variant={'filled'}
                disableUnderline
                classes={classes}
                className={clsx(buttonClass({ color, variant }), 'rounded-lg')}
                inputProps={{
                    classes: {
                        icon: textClass({ color, variant }),
                        root: 'p-2',
                    },
                }}
            >
                {items.map(({ name }, index) => (
                    <MenuItem key={index} value={name}>
                        {name}
                    </MenuItem>
                ))}
            </Select>
        </div>
    );
}

export interface DropdownProps extends AsBox, WithItemsOfDropdown {}

// noinspection JSUnusedGlobalSymbols
export default Dropdown;

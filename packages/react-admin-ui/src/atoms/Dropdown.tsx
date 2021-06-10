import {useCallback, useState, ChangeEvent} from 'react';
import clsx from "clsx";
import colorClass from "../utils/colorClass";
import Select from '@material-ui/core/Select';
import {box_color, box_variant} from "../types";
import MenuItem from '@material-ui/core/MenuItem';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        "&:focus": {
            borderRadius: "0.5rem"
        }
    }
});

export function Dropdown({color, menuItems, variant}: DropdownProps) {
    const classes = useStyles();
    const [value, setValue] = useState<string | number | undefined>(menuItems[0].name);
    const [open, setOpen] = useState(false);
    const handleChange = useCallback((event: ChangeEvent<{ value: unknown }>) => {
        setValue(event.target.value as number);
    }, [setValue, value]);
    const handleClose = useCallback(() => {
        setOpen(false);
    }, [setOpen]);
    const handleOpen = useCallback(() => {
        setOpen(true);
    }, [setOpen]);

    return (
        <div>
            <Select
                open={open} onClose={handleClose} onOpen={handleOpen}
                defaultValue={value} onChange={handleChange}
                variant={'filled'} disableUnderline classes={classes}
                className={clsx(colorClass({color, variant}), 'rounded-lg')}
                inputProps={{classes: {
                    icon: colorClass({color, variant}),
                    root: 'p-2',
                }}}
            >
                {menuItems.map(({name}, index) => (
                    <MenuItem key={index} value={name}>{name}</MenuItem>
                ))}
            </Select>
        </div>
    );
}

export interface DropdownProps {
    color?: box_color,
    menuItems: {
        name?: string | number
    }[],
    variant?: box_variant,
}

export default Dropdown
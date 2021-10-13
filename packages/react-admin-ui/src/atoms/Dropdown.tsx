import { useCallback, useState, ChangeEvent, useMemo } from 'react';
import clsx from 'clsx';
import Div from './Div';
import buttonClass from '../mappings/buttons';
import boxTextClass from '../mappings/box-texts';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import useActivator from '../hooks/useActivator';
import { AsBox } from '../as';
import { WithItemsOfDropdown } from '../withs';

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
    const [open, handleOpen, handleClose] = useActivator(false);
    const handleChange = useCallback(
        (event: ChangeEvent<{ value: unknown }>) => {
            setValue(event.target.value as number);
        },
        [setValue, value],
    );
    const inputProps = useMemo(
        () => ({
            classes: {
                icon: boxTextClass({ color, variant }),
                root: 'p-2',
            },
        }),
        [color, variant],
    );

    if (!items.length) return null;

    return (
        <Div className={className}>
            <Select
                classes={classes}
                defaultValue={value}
                disableUnderline
                inputProps={inputProps}
                onChange={handleChange}
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}
                variant={'filled'}
                className={clsx(buttonClass({ color, variant }), 'rounded-lg')}
            >
                {items.map(({ name }, index) => (
                    <MenuItem key={index} value={name}>
                        {name}
                    </MenuItem>
                ))}
            </Select>
        </Div>
    );
}

export interface DropdownProps extends AsBox, WithItemsOfDropdown {}

// noinspection JSUnusedGlobalSymbols
export default Dropdown;

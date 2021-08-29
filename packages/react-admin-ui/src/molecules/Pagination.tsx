import { ChangeEvent, useCallback, useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MuiPagination from '@material-ui/lab/Pagination';
import tailwindConfig from '../../tailwind.config';
import { basic_size, flag } from '../types';
import { AsComponent } from '../as';
import { WithColorOfBox } from '../withs';

const ellipsisPaddings = {
    lg: 8,
    md: 4,
    sm: 2,
};
const heightSizes = {
    lg: 40,
    md: 32,
    sm: 26,
};
const sizes = {
    lg: 'large',
    md: 'medium',
    sm: 'small',
};
const tailwindColors = tailwindConfig.theme.extend.colors;
const colors = {
    primary: tailwindColors.primary,
    secondary: tailwindColors.secondary,
    success: tailwindColors.success,
    info: tailwindColors.info,
    warning: tailwindColors.warning,
    danger: tailwindColors.danger,
    light: tailwindColors.light,
    dark: tailwindColors.dark,
};
const tailwindTextColors = tailwindConfig.theme.extend.textColors;
const activeTextColors = {
    primary: tailwindTextColors.contained_primary,
    secondary: tailwindTextColors.contained_primary,
    success: tailwindTextColors.contained_primary,
    info: tailwindTextColors.contained_primary,
    warning: tailwindTextColors.contained_primary,
    danger: tailwindTextColors.contained_primary,
    light: tailwindTextColors.contained_primary,
    dark: tailwindTextColors.contained_primary,
};
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'inline-block',
        boxSizing: 'border-box',
        borderRadius: theme.spacing(1),
    },
    ul: (props: PaginationProps) => ({
        '& .MuiPaginationItem-root': {
            borderTop: '1px solid rgba(0,0,0,.125)',
            borderRight: '1px solid rgba(0,0,0,.125)',
            borderBottom: '1px solid rgba(0,0,0,.125)',
            color: colors[props.color || ''] || colors.primary,
            borderRadius: 'unset',
            margin: 'unset',
        },
        '& .MuiPaginationItem-ellipsis': {
            height: heightSizes[props.size || ''] || heightSizes.md,
            paddingTop: ellipsisPaddings[props.size || ''] || ellipsisPaddings.md,
        },
        '& .MuiPaginationItem-root.Mui-disabled': {
            opacity: 1,
        },
        '& .MuiPaginationItem-root.Mui-disabled svg': {
            opacity: 0.38,
        },
        '& li:first-child .MuiPaginationItem-root': {
            borderRadius: '4px 0 0 4px',
            borderLeft: '1px solid rgba(0,0,0,.125)',
        },
        '& li:first-child .MuiPaginationItem-root button:focus': {
            outlineStyle: 'none',
        },
        '& li:last-child .MuiPaginationItem-root': {
            borderRadius: '0 4px 4px 0',
            borderRight: '1px solid rgba(0,0,0,.125)',
        },
        '& .MuiPaginationItem-root.Mui-selected': {
            color: activeTextColors[props.color || ''] || activeTextColors.primary,
            backgroundColor: colors[props.color || ''] || colors.primary,
        },
    }),
}));

export function Pagination({ className, ...props }: PaginationProps) {
    const { total, size, boundaryCount, disabledPass, disabledSkip } = props;
    const classes = useStyles(props);
    const [page, setPage] = useState(1);
    const handleChange = useCallback(
        (event: ChangeEvent<unknown>, value: number) => {
            setPage(value);
        },
        [setPage],
    );

    return (
        <div className={clsx(classes.root, className)}>
            <MuiPagination
                boundaryCount={boundaryCount}
                classes={{ ul: classes.ul }}
                count={total}
                hideNextButton={disabledPass}
                hidePrevButton={disabledPass}
                onChange={handleChange}
                page={page}
                showFirstButton={disabledSkip}
                showLastButton={disabledSkip}
                size={sizes[size || ''] || sizes.md}
            />
        </div>
    );
}

export interface PaginationProps extends AsComponent, WithColorOfBox {
    boundaryCount?: number;
    disabledPass?: flag;
    disabledSkip?: flag;
    size?: basic_size;
    total?: number;
}

// noinspection JSUnusedGlobalSymbols
export default Pagination;

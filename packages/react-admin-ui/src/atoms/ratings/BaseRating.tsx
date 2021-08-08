import { FunctionComponent } from 'react';
import clsx from 'clsx';
import Text from '../Text';
import useRating from '../../hooks/useRating';
import MuiRating from '@material-ui/lab/Rating';
import { class_name } from '../../types';
import { defaultLabelPlacement } from '../../mappings/label-placements';
import {
    WithColorOfBox,
    WithKind,
    WithName,
    WithOnChange,
    WithLabelPlacement,
    WithValueAsNumber,
    WithDefaultValueAsNumber,
    WithMin,
    WithMax,
    WithValuesOfRating,
} from '../../withs';
import { AsComponent } from '../../as';

const labelPlacements = {
    left: 'flex-row-reverse space-x-2',
    right: 'space-x-2',
    top: 'flex-col-reverse space-y-2',
    bottom: 'flex-col space-y-2',
    none: '',
};

export function BaseRating(props: BaseRatingProps) {
    const {
        className,
        reverse = false,
        labelPlacement = defaultLabelPlacement,
        container,
        labelProps = {},
        ratingProps = {},
        icon,
        emptyIcon,
        name = undefined,
        kind,
        styles = () => ({}),
    } = props;
    const classes = styles(props);
    const {
        max,
        readOnly,
        value,
        defaultValue,
        atChange: onChange,
        onHover: onChangeActive,
        label,
    } = useRating(props, { reverse });
    return (
        <div className={clsx('flex items-center', labelPlacements[labelPlacement || ''], className)}>
            <MuiRating
                name={readOnly ? undefined : name || `${kind}-rating`}
                classes={classes}
                icon={icon ? icon(props as any) : undefined}
                emptyIcon={emptyIcon ? emptyIcon(props as any) : icon ? icon(props as any) : undefined}
                max={max}
                readOnly={readOnly}
                value={value}
                defaultValue={defaultValue}
                onChange={onChange}
                onChangeActive={onChangeActive}
                IconContainerComponent={container}
                {...ratingProps}
            />
            <Text text={label} color={props.color || 'primary'} {...labelProps} />
        </div>
    );
}

export interface BaseBaseRatingProps
    extends AsComponent,
        WithName,
        WithOnChange,
        WithLabelPlacement,
        WithColorOfBox,
        WithValueAsNumber,
        WithDefaultValueAsNumber,
        WithMin,
        WithMax,
        WithValuesOfRating {}

export interface BaseRatingProps extends BaseBaseRatingProps, Required<WithKind> {
    styles?: (props: any) => { [key: string]: class_name };
    container?: FunctionComponent;
    icon?: FunctionComponent;
    emptyIcon?: FunctionComponent;
    labelProps?: any;
    ratingProps?: any;
    reverse?: boolean;
}

// noinspection JSUnusedGlobalSymbols
export default BaseRating;

import { FunctionComponent } from 'react';
import clsx from 'clsx';
import Text from '../Text';
import useRating from '../../hooks/useRating';
import MuiRating from '@material-ui/lab/Rating';
import { box_color, class_name, rating_value } from '../../types';
import { defaultLabelPlacement, label_placement } from '../../mappings/label-placements';

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

export interface BaseBaseRatingProps {
    className?: class_name;
    name?: string;
    color?: box_color;
    min?: number;
    max?: number;
    values?: rating_value[];
    onChange?: Function;
    value?: number | string;
    defaultValue?: number | string;
    labelPlacement?: label_placement;
}

export interface BaseRatingProps extends BaseBaseRatingProps {
    kind: string;
    styles?: (props: any) => { [key: string]: class_name };
    container?: FunctionComponent;
    icon?: FunctionComponent;
    emptyIcon?: FunctionComponent;
    labelProps?: any;
    ratingProps?: any;
    reverse?: boolean;
}

export default BaseRating;

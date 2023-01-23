import Text from './Text';
import Row from './Row';
import { WithLabel, WithMargin, WithValue } from '../withs';
import InfosItemValue from './InfosItemValue';

export function InfosItem({ label, value, type, mt = 'md', ...rest }: InfosItemProps) {
    return (
        <Row mt={mt} spaced={2} {...rest}>
            <Text color={'info'} text={label} bold />
            <InfosItemValue value={value} complexValueComponent={InfosItem} type={type} />
        </Row>
    );
}

export interface InfosItemProps extends WithLabel, WithValue, WithMargin {
    type?:
        | 'default'
        | 'progress'
        | 'alert'
        | 'badge'
        | 'panel'
        | 'pill'
        | 'ratio'
        | 'rating'
        | 'rating5'
        | 'rating10'
        | 'rating20'
        | 'rating_squares'
        | 'rating5_squares'
        | 'rating10_squares'
        | 'rating20_squares'
        | 'spinner'
        | 'tag'
        | 'text'
        | 'code';
}

export default InfosItem;

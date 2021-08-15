import Text from './Text';
import Row from './Row';
import { WithLabel, WithValue } from '../withs';

export function InfosItem({ label, value }: InfosItemProps) {
    return (
        <Row mt={'md'} spaced>
            <Text disabled text={label} />
            <Text text={value} />
        </Row>
    );
}

export interface InfosItemProps extends WithLabel, WithValue {}

export default InfosItem;

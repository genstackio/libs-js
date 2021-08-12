import Text from './Text';
import { WithLabel, WithValue } from '../withs';

export function InfosItem({ label, value }: InfosItemProps) {
    return (
        <div className={'flex justify-between mt-4'}>
            <Text text={label} className={'text-disabled'} />
            <Text text={value} />
        </div>
    );
}

export interface InfosItemProps extends WithLabel, WithValue {}

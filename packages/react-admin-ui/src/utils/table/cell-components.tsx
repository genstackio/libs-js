import Badge from '../../atoms/Badge';
import Icon from '../../atoms/Icon';
import FlagIcon from '../../atoms/FlagIcon';
import Image from '../../atoms/Image';
import Rating from '../../atoms/Rating';
import Spinner from '../../atoms/Spinner';
import Tag from '../../atoms/Tag';

export const badge = ({value}: any) =>
    <Badge text={(value as string) || ''} type={'pill'} variant={'contained'} color={'light'} />;
export const flag = ({value}: any) => <FlagIcon locale={value as string} />;
export const icon = ({value}: any) => <Icon icon={value as string} />;
export const image = ({value}: any) => <Image {...(value as any)} />;
export const rating = ({value}: any) => <Rating value={value as any} />;
export const spinner = () => <Spinner />;
export const tag = ({value}: any) => <Tag text={value as string} />;

export const unknown = () => null;

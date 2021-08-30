import clsx from 'clsx';
import Div from './Div';
import Text from './Text';
import { WithSubtitle, WithTitle, WithVariantOfBox } from '../withs';
import { AsComponent } from '../as';

export function BigInfo({ title, subtitle, className, variant }: BigInfoProps) {
    console.log(variant);
    return (
        <Div hfull center className={clsx(variant === 'contained' ? 'border-r-0' : '', className)} p={'_lg'}>
            <Text text={title} variant={'title3'} center />
            <Text color={variant === 'contained' ? 'inherit' : 'dark'} text={subtitle} variant={'subtitle'} center />
        </Div>
    );
}

export interface BigInfoProps extends WithTitle, WithSubtitle, WithVariantOfBox, AsComponent {}

export default BigInfo;

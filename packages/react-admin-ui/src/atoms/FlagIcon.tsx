import { useMemo } from 'react';
import Icon, { IconProps } from './Icon';
import convertLocaleToFlagName from '../utils/convertLocaleToFlagName';
import { WithLocale } from '../withs';

export function FlagIcon({ locale, ...props }: FlagIconProps) {
    const icon = useMemo(() => `@flags/${convertLocaleToFlagName(locale)}`, [locale]);

    return <Icon icon={icon} height={20} width={30} {...props} />;
}

export interface FlagIconProps extends IconProps, Required<WithLocale> {}

// noinspection JSUnusedGlobalSymbols
export default FlagIcon;

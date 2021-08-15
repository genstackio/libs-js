import Text from './Text';
import { WithTitle } from '../withs';

export function PricingItemFeature({ title }: PricingItemFeatureProps) {
    return <Text text={title} variant={'subtitle'} />;
}

export type PricingItemFeatureProps = WithTitle;

// noinspection JSUnusedGlobalSymbols
export default PricingItemFeature;

import clsx from "clsx";
import spinnerVariantClass, {spinner_variant} from '../mappings/spinner-variants';

export function Spinner({variant = 'half-circle'}: SpinnerProps) {
    let isSpin = ('dots' !== variant) && ('squares' !== variant);
    return (
        <div>
            {isSpin && <div className={clsx(spinnerVariantClass(variant), 'h-20 w-20 rounded-full animate-spin')} />}
            {!isSpin && (
                <div className={'flex space-x-1'}>
                    <div className={clsx(spinnerVariantClass(variant), 'animate-bounce')} />
                    <div className={clsx(spinnerVariantClass(variant), 'animate-bounce200')} />
                    <div className={clsx(spinnerVariantClass(variant), 'animate-bounce400')} />
                </div>
            )}
        </div>
    );
}

export interface SpinnerProps {
    variant?: spinner_variant,
}

export default Spinner
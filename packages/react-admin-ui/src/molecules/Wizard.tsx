import clsx from 'clsx';
import { WizardMenu } from '../atoms/WizardMenu';
import { WizardContent } from '../atoms/WizardContent';
import { wizard_step } from '../types';
import { WithColorOfBox, WithDefaultValues, WithOnChange, WithOnComplete } from '../withs';
import { AsComponent } from '../as';

export function Wizard({ className, ...props }: WizardProps) {
    return (
        <div className={clsx('flex sm:flex-col', className)}>
            <WizardMenu {...props} />
            <WizardContent {...props} />
        </div>
    );
}

export interface WizardProps extends AsComponent, WithOnChange, WithOnComplete, WithDefaultValues, WithColorOfBox {
    steps: wizard_step[];
    currentStep: wizard_step;
}

// noinspection JSUnusedGlobalSymbols
export default Wizard;

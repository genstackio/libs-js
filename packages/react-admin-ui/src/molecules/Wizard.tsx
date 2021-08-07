import clsx from 'clsx';
import { WizardMenu } from '../atoms/WizardMenu';
import { WizardContent } from '../atoms/WizardContent';
import { wizard_step } from '../types';
import { WithColorOfBox, WithClassName, WithDefaultValues, WithOnChange, WithOnComplete } from '../withs';

export function Wizard({ className, ...props }: WizardProps) {
    return (
        <div className={clsx('flex sm:flex-col', className)}>
            <WizardMenu {...props} />
            <WizardContent {...props} />
        </div>
    );
}

export interface WizardProps extends WithClassName, WithOnChange, WithOnComplete, WithDefaultValues, WithColorOfBox {
    steps: wizard_step[];
    currentStep: wizard_step;
}

export default Wizard;

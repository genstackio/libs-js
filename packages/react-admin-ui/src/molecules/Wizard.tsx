import clsx from 'clsx';
import { WizardMenu } from '../atoms/WizardMenu';
import { WizardContent } from '../atoms/WizardContent';
import { box_color, class_name, wizard_step } from '../types';

export function Wizard({ className, ...props }: WizardProps) {
    return (
        <div className={clsx('flex sm:flex-col', className)}>
            <WizardMenu {...props} />
            <WizardContent {...props} />
        </div>
    );
}

export interface WizardProps {
    className?: class_name;
    onChange: Function;
    onComplete: Function;
    defaultValues?: { [key: string]: any };
    steps: wizard_step[];
    currentStep: wizard_step;
    color?: box_color;
}

export default Wizard;

import Row from '../atoms/Row';
import WizardMenu, { WizardMenuProps } from '../atoms/WizardMenu';
import WizardContent, { WizardContentProps } from '../atoms/WizardContent';
import { wizard_step } from '../types';

export function Wizard({ className, ...props }: WizardProps) {
    return (
        <Row className={className}>
            <WizardMenu {...props} />
            <WizardContent {...props} />
        </Row>
    );
}

export interface WizardProps extends WizardMenuProps, WizardContentProps {
    steps: wizard_step[];
    currentStep: wizard_step;
    [key: string]: any;
}

// noinspection JSUnusedGlobalSymbols
export default Wizard;

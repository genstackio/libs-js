import { wizard_step } from '../../types';
import Wizard from '../../molecules/Wizard';
import useWorkflow from '../../hooks/useWorkflow';
import { WithBoxColor, WithDefaultValues, WithOnSubmit } from '../../withs';

export function WizardLayoutTemplate({ onSubmit, steps, defaultValues, color }: WizardLayoutTemplateProps) {
    const props = useWorkflow({ onSubmit, steps, defaultValues });
    return <Wizard className={'h-screen'} color={color} {...props} />;
}

export interface WizardLayoutTemplateProps extends WithBoxColor, WithDefaultValues, Required<WithOnSubmit> {
    steps: wizard_step[];
}

export default WizardLayoutTemplate;

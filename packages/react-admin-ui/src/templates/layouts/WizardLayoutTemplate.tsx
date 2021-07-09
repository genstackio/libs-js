import { box_color, wizard_step } from '../../types';
import Wizard from '../../molecules/Wizard';
import useWorkflow from '../../hooks/useWorkflow';

export function WizardLayoutTemplate({ onSubmit, steps, defaultValues, color }: WizardLayoutTemplateProps) {
    const props = useWorkflow({ onSubmit, steps, defaultValues });
    return <Wizard className={'h-screen'} color={color} {...props} />;
}

export interface WizardLayoutTemplateProps {
    steps: wizard_step[];
    color: box_color;
    defaultValues: { [key: string]: any };
    onSubmit: Function;
}

export default WizardLayoutTemplate;

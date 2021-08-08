import { wizard_step } from '../../types';
import Wizard from '../../molecules/Wizard';
import useWorkflow from '../../hooks/useWorkflow';
import { WithColorOfBox, WithDefaultValues, WithOnSubmit } from '../../withs';
import clsx from 'clsx';
import { AsComponent } from '../../as';

export function WizardLayoutTemplate({ className, onSubmit, steps, defaultValues, color }: WizardLayoutTemplateProps) {
    const props = useWorkflow({ onSubmit, steps, defaultValues });
    return <Wizard className={clsx('h-screen', className)} color={color} {...props} />;
}

export interface WizardLayoutTemplateProps
    extends AsComponent,
        WithColorOfBox,
        WithDefaultValues,
        Required<WithOnSubmit> {
    steps: wizard_step[];
}

// noinspection JSUnusedGlobalSymbols
export default WizardLayoutTemplate;

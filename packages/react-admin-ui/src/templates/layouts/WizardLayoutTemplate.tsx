import clsx from 'clsx';
import { wizard_step } from '../../types';
import Wizard from '../../molecules/Wizard';
import useWorkflow from '../../hooks/useWorkflow';
import { AsComponent } from '../../as';
import { WithColorOfBox, WithDefaultValues, WithOnSubmit } from '../../withs';

export function WizardLayoutTemplate({ className, color, defaultValues, onSubmit, steps }: WizardLayoutTemplateProps) {
    const props = useWorkflow({ onSubmit, steps, defaultValues });

    return <Wizard color={color} className={clsx('h-screen', className)} {...props} />;
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

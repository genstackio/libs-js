import clsx from 'clsx';
import Container from './Container';
import { wizard_step } from '../types';
import { AsComponent } from '../as';
import { WithDefaultValues, WithOnCancel, WithOnComplete, WithOnNext, WithOnPrevious, WithOnSave } from '../withs';

export function WizardContent({ className, currentStep, onComplete, onNext, ...props }: WizardContentProps) {
    const { component: Component, bgImage } = currentStep || {};

    return (
        <Container
            bgImage={bgImage}
            className={clsx('flex-1 bg-cover flex flex-col justify-center items-center p-4', className)}
        >
            {!!Component && <Component onSubmit={onNext || onComplete} {...props} />}
        </Container>
    );
}

export interface WizardContentProps
    extends AsComponent,
        WithDefaultValues,
        WithOnNext,
        WithOnPrevious,
        WithOnCancel,
        WithOnComplete,
        WithOnSave {
    currentStep: wizard_step;
}

// noinspection JSUnusedGlobalSymbols
export default WizardContent;

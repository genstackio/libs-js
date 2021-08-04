import clsx from 'clsx';
import Container from './Container';
import { wizard_step } from '../types';
import { WithClassName, WithDefaultValues } from '../withs';

export function WizardContent({
    className,
    currentStep: { component: Component, bgImage },
    onNext,
    onComplete,
    ...props
}: WizardContentProps) {
    return (
        <Container
            bgImage={bgImage}
            className={clsx('flex-1 bg-cover flex flex-col justify-center items-center p-4', className)}
        >
            <Component onSubmit={onNext || onComplete} {...props} />
        </Container>
    );
}

export interface WizardContentProps extends WithClassName, WithDefaultValues {
    currentStep: wizard_step;
    onNext?: Function;
    onPrevious?: Function;
    onCancel?: Function;
    onComplete?: Function;
    onSave?: Function;
}

export default WizardContent;

import clsx from 'clsx';
import { class_name, wizard_step } from '../types';
import { Container, Image, WizardStep } from './';
import { useCallback } from 'react';

export function WizardMenu({ className, onChange, steps, currentStep, ...props }: WizardMenuProps) {
    const handleChange = useCallback(
        (id) => (e) => {
            e.stopPropagation();
            e.preventDefault();
            onChange && onChange(id);
        },
        [onChange],
    );
    return (
        <Container
            className={clsx(
                'relative w-3/10 md:w-2/6 sm:w-full px-20 md:px-10 py-20 sm:p-7 space-y-6 bg-clear',
                className,
            )}
        >
            {steps.map(({ id, ...step }, index) => (
                <WizardStep
                    key={id}
                    index={index + 1}
                    className={'relative z-10'}
                    active={currentStep?.id === id}
                    disabled={step.isDisabled && step.isDisabled({ currentStep, steps, index })}
                    onClick={handleChange(id)}
                    {...step}
                    {...props}
                />
            ))}
            {currentStep?.image && (
                <Image
                    className={'absolute bottom-0 left-0 right-0 z-0 sm:hidden'}
                    url={currentStep!.image!.url}
                    alt={currentStep!.image!.alt}
                    expand={false}
                />
            )}
        </Container>
    );
}

export interface WizardMenuProps {
    className?: class_name;
    currentStep: wizard_step;
    steps: wizard_step[];
    onChange: Function;
}

// noinspection JSUnusedGlobalSymbols
export default WizardMenu;

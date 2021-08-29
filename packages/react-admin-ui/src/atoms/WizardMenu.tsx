import { useCallback } from 'react';
import clsx from 'clsx';
import Container from './Container';
import Image from './Image';
import WizardStep from './WizardStep';
import { wizard_step } from '../types';
import { AsComponent } from '../as';
import { WithOnChange } from '../withs';

export function WizardMenu({ className, currentStep, onChange, steps, ...props }: WizardMenuProps) {
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
            className={clsx('relative sm:w-3/10 md:w-2/6 w-full p-7 sm:p-10 md:p-20 space-y-6 bg-clear', className)}
        >
            {steps.map(({ id, ...step }, index) => (
                <WizardStep
                    active={currentStep?.id === id}
                    key={id}
                    disabled={step.isDisabled && step.isDisabled({ currentStep, steps, index })}
                    index={index + 1}
                    onClick={handleChange(id)}
                    {...step}
                    {...props}
                    className={'relative z-10'}
                />
            ))}
            {currentStep?.image && (
                <Image
                    alt={currentStep!.image!.alt}
                    expand={false}
                    url={currentStep!.image!.url}
                    className={'hidden sm:absolute bottom-0 left-0 right-0 z-0'}
                />
            )}
        </Container>
    );
}

export interface WizardMenuProps extends AsComponent, WithOnChange {
    currentStep: wizard_step;
    steps: wizard_step[];
}

// noinspection JSUnusedGlobalSymbols
export default WizardMenu;

import { useCallback, useMemo, useState } from 'react';
import { workflow_step } from '../types';
import stopPrevent from '../utils/stopPrevent';

// noinspection JSUnusedLocalSymbols
function computePreviousStep(currentStep, steps) {
    return currentStep; // @todo
}

// noinspection JSUnusedLocalSymbols
function computeNextStep(currentStep, steps) {
    const currentIndex = steps.findIndex((s) => s.id === currentStep.id);
    const maxIndex = steps.length - 1;
    const nextIndex = currentIndex + 1;
    return nextIndex <= maxIndex ? steps[nextIndex] : undefined;
}

export const useWorkflow = ({
    steps,
    onCancel,
    onSubmit,
    ...props
}: {
    steps: workflow_step[];
    onCancel?: Function;
    onSubmit: Function;
    // noinspection JSUnusedLocalSymbols
    [key: string]: any;
}) => {
    const [state, setState] = useState({ currentStep: steps[0], data: {} });
    const handlePrevious = useCallback(
        (data = {}) =>
            (e) => {
                stopPrevent(e);
                const step = computePreviousStep(state.currentStep, steps);
                setState({ ...state, currentStep: step || state.currentStep, data: { ...state.data, ...data } });
            },
        [computePreviousStep],
    );
    const handleComplete = useCallback(
        (data) => {
            const newData = { ...state.data, ...data };
            setState({ ...state, data: newData });
            onSubmit && onSubmit(newData);
        },
        [onSubmit, state],
    );
    const handleNext = useCallback(
        (data = {}) => {
            const step = computeNextStep(state.currentStep, steps);
            if (!step) return handleComplete(data);
            setState({ ...state, currentStep: step || state.currentStep, data: { ...state.data, ...data } });
        },
        [state, handleComplete, computeNextStep],
    );
    const handleChange = useCallback(
        (stepId, data = {}) => {
            const step = steps.find((s) => s.id === stepId);
            step && setState({ ...state, currentStep: step || state.currentStep, data: { ...state.data, ...data } });
        },
        [computeNextStep],
    );
    const handleCancel = useCallback(
        (reason = {}) =>
            (e) => {
                stopPrevent(e);
                onCancel && onCancel(reason, state.data);
            },
        [onCancel, state],
    );
    const handleSave = useCallback(
        (data) => (e) => {
            stopPrevent(e);
            setState({ ...state, data: { ...state.data, ...data } });
        },
        [setState, state],
    );

    return useMemo(
        () => ({
            steps,
            currentStep: state.currentStep,
            onNext: handleNext,
            onPrevious: handlePrevious,
            onCancel: handleCancel,
            onComplete: handleComplete,
            onChange: handleChange,
            onSave: handleSave,
            ...props,
        }),
        [props, steps, state, handleNext, handlePrevious, handleCancel, handleComplete, handleChange, handleSave],
    );
};

// noinspection JSUnusedGlobalSymbols
export default useWorkflow;

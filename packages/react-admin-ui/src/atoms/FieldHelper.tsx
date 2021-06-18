export function FieldHelper({helper}: FieldHelperProps) {
    if (!helper) return null;
    return (
        <span className={'flex items-center font-medium tracking-wide text-xs mt-1 ml-1 text-gray-500'}>
            {helper}
        </span>
    );
}

export interface FieldHelperProps {
    helper?: string,
}

export default FieldHelper
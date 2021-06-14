import clsx from 'clsx';

export function TextField({disabled, error, errorText, label, placeHolder}: TextFieldProps) {
    return (
        <div>
            <div>
                <label htmlFor={label}
                       className={'mb-1 text-xs sm:text-sm tracking-wide text-gray-600 capitalize'}>
                    {label}
                </label>
                <input className={clsx(
                    'text-sm sm:text-base w-full border rounded placeholder-gray-400 ' +
                    'focus:border-indigo-400 focus:outline-none py-2 pr-2 pl-2 focus:ring-4',
                    error && 'border border-red-500 focus:border-red-500 ring-red-300')}
                       id={label}
                       name={label}
                       placeholder={placeHolder}
                       disabled={disabled}
                       type={'text'}
                />
                {error && <span className={'flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1'}>
                    {errorText}
                </span>}
            </div>
        </div>
    );
}

export interface TextFieldProps {
    disabled?: boolean,
    error: boolean,
    errorText?: string,
    label: string,
    placeHolder?: string,
}

export default TextField
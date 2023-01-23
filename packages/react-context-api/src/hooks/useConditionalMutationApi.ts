import useMutationApi from './useMutationApi';

const defaultOptions = {};

export const useConditionalMutationApi = (condition: boolean, name: string, options: any = defaultOptions) => {
    const conditional = (test: boolean) => (test ? useMutationApi : () => [undefined]);

    return conditional(condition)(name, options);
};

// noinspection JSUnusedGlobalSymbols
export default useConditionalMutationApi;

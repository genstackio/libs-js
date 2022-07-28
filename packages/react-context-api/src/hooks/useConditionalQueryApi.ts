import useQueryApi from "./useQueryApi";

const defaultOptions = {};

export const useConditionalQueryApi = (condition: boolean, name: string, options: any = defaultOptions) => {
    const conditional = (test: boolean) => test ? useQueryApi : (() => [undefined]);

    return conditional(condition)(name, options);
};

// noinspection JSUnusedGlobalSymbols
export default useConditionalQueryApi;

import useModuleContext from '../hooks/useModuleContext';
import usePadding from './usePadding';
import useAlreadyInContainerContext from './useAlreadyInContainerContext';

export function useModuleContainerInfos({
    border = undefined,
    inverted = undefined,
    padding = undefined,
    title = undefined,
    ...props
}: {
    padding?: any;
    [key: string]: any;
}) {
    const ctx = useModuleContext();
    const alreadyInContainer = useAlreadyInContainerContext();

    const { first, last, middle, containerProps, blockProps, paddingMode = 'all' } = ctx;
    const paddingClassName = usePadding({
        paddingMode,
        padding: padding || containerProps?.padding,
        first,
        last,
        middle,
    });
    border = undefined === border ? blockProps?.border || false : border;
    title = undefined === title ? blockProps?.title || undefined : title;
    inverted = undefined === inverted ? blockProps?.inverted || false : inverted;

    return { ...ctx, inverted, border, title, className: paddingClassName, props, alreadyInContainer };
}

export default useModuleContainerInfos;

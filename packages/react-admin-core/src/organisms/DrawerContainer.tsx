import clsx from "clsx";

const sizes = {
    xs: 'w-screen sm:w-[200px] md:w-[300px] lg:w-[400px]',
    sm: 'w-screen sm:w-[200px] md:w-[400px] lg:w-[500px]',
    md: 'w-screen sm:w-[300px] md:w-[500px] lg:w-[700px]',
    lg: 'w-screen sm:w-[400px] md:w-[600px] lg:w-[800px]',
    xl: 'w-screen sm:w-[500px] md:w-[700px] lg:w-[900px]',
};

export function DrawerContainer({children, className, size = 'md'}: DrawerContainerProps) {
    return (
        <div className={clsx(sizes[size || 'md'] || sizes['md'], 'p-4 flex flex-col', className)}>
            {children || false}
        </div>
    );
}

export interface DrawerContainerProps {
    className?: string;
    children?: any;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

// noinspection JSUnusedGlobalSymbols
export default DrawerContainer;

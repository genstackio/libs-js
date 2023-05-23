const classes = {
    block: { display: 'block' },
    'inline-block': { display: 'inline-block' },
    inline: { display: 'inline' },
    flex: { display: 'flex' },
    'inline-flex': { display: 'inline-flex' },
    table: { display: 'table' },
    'inline-table': { display: 'inline-table' },
    'table-caption': { display: 'table-caption' },
    'table-cell': { display: 'table-cell' },
    'table-column': { display: 'table-cell' },
    'table-column-group': { display: 'table-column-group' },
    'table-footer-group': { display: 'table-footer-group' },
    'table-header-group': { display: 'table-header-group' },
    'table-row-group': { display: 'table-row-group' },
    'table-row': { display: 'table-row' },
    'flow-root': { display: 'flow-root' },
    grid: { display: 'grid' },
    'inline-grid': { display: 'inline-grid' },
    contents: { display: 'contents' },
    'list-item': { display: 'list-item' },
    hidden: { display: 'none' },

    'box-border': { boxSizing: 'border-box' },
    'box-content': { boxSizing: 'content-box' },

    'float-right': { float: 'right' },
    'float-left': { float: 'left' },
    'float-none': { float: 'none' },

    'clear-left': { clear: 'left' },
    'clear-right': { clear: 'right' },
    'clear-both': { clear: 'both' },
    'clear-none': { clear: 'none' },

    isolate: { isolation: 'isolate' },
    'isolation-auto': { isolation: 'auto' },

    'object-contain': { objectFit: 'contain' },
    'object-cover': { objectFit: 'cover' },
    'object-fill': { objectFit: 'fill' },
    'object-none': { objectFit: 'none' },
    'object-scale-down': { objectFit: 'scale-down' },

    'object-bottom': { objectPosition: 'bottom' },
    'object-center': { objectPosition: 'center' },
    'object-left': { objectPosition: 'left' },
    'object-left-bottom': { objectPosition: 'left bottom' },
    'object-left-top': { objectPosition: 'left top' },
    'object-right': { objectPosition: 'right' },
    'object-right-bottom': { objectPosition: 'right bottom' },
    'object-right-top': { objectPosition: 'right top' },
    'object-top': { objectPosition: 'top' },

    'overflow-auto': { overflow: 'auto' },
    'overflow-hidden': { overflow: 'hidden' },
    'overflow-visible': { overflow: 'visible' },
    'overflow-scroll': { overflow: 'scroll' },
    'overflow-x-auto': { overflowX: 'auto' },
    'overflow-x-hidden': { overflowX: 'hidden' },
    'overflow-x-visible': { overflowX: 'visible' },
    'overflow-x-scroll': { overflowX: 'scroll' },
    'overflow-y-auto': { overflowY: 'auto' },
    'overflow-y-hidden': { overflowY: 'hidden' },
    'overflow-y-visible': { overflowY: 'visible' },
    'overflow-y-scroll': { overflowY: 'scroll' },

    'overscroll-auto': { overscrollBehaviour: 'auto' },
    'overscroll-contain': { overscrollBehaviour: 'contain' },
    'overscroll-none': { overscrollBehaviour: 'none' },
    'overscroll-x-auto': { overscrollBehaviourX: 'auto' },
    'overscroll-x-contain': { overscrollBehaviourX: 'contain' },
    'overscroll-x-none': { overscrollBehaviourX: 'none' },
    'overscroll-y-auto': { overscrollBehaviourY: 'auto' },
    'overscroll-y-contain': { overscrollBehaviourY: 'contain' },
    'overscroll-y-none': { overscrollBehaviourY: 'none' },

    static: { position: 'static' },
    fixed: { position: 'fixed' },
    absolute: { position: 'absolute' },
    relative: { position: 'relative' },
    sticky: { position: 'sticky' },

    visible: { visibility: 'visible' },
    invisible: { visibility: 'hidden' },

    'z-0': { zIndex: 0 },
    'z-10': { zIndex: 10 },
    'z-20': { zIndex: 20 },
    'z-30': { zIndex: 30 },
    'z-40': { zIndex: 40 },
    'z-50': { zIndex: 50 },
    'z-auto': { zIndex: 'auto' },

    container: { width: '100%' },

    'decoration-slice': { boxDecorationBreak: 'slice' },
    'decoration-clone': { boxDecorationBreak: 'clone' },

    'flex-row': { flexDirection: 'row' },
    'flex-row-reverse': { flexDirection: 'row-reverse' },
    'flex-col': { flexDirection: 'column' },
    'flex-col-reverse': { flexDirection: 'column-reverse' },

    'flex-1': { flex: '1 1 0%' },
    'flex-auto': { flex: '1 1 auto' },
    'flex-initial': { flex: '0 1 auto' },
    'flex-none': { flex: 'none' },
    'flex-grow-0': { flexGrow: 0 },
    'flex-grow': { flexGrow: 1 },
    'flex-shrink-0': { flexShrink: 0 },
    'flex-shrink': { flexShrink: 1 },
    'flex-wrap': { flexWrap: 'wrap' },
    'flex-wrap-reverse': { flexWrap: 'wrap-reverse' },
    'flex-nowrap': { flexWrap: 'nowrap' },

    'order-1': { order: 1 },
    'order-2': { order: 2 },
    'order-3': { order: 3 },
    'order-4': { order: 4 },
    'order-5': { order: 5 },
    'order-6': { order: 6 },
    'order-7': { order: 7 },
    'order-8': { order: 8 },
    'order-9': { order: 9 },
    'order-10': { order: 10 },
    'order-11': { order: 11 },
    'order-12': { order: 12 },
    'order-first': { order: -9999 },
    'order-last': { order: 9999 },
    'order-none': { order: 0 },

    'grid-cols-1': { gridTemplateColumns: 'repeat(1, minmax(0, 1fr))' },
    'grid-cols-2': { gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' },
    'grid-cols-3': { gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' },
    'grid-cols-4': { gridTemplateColumns: 'repeat(4, minmax(0, 1fr))' },
    'grid-cols-5': { gridTemplateColumns: 'repeat(5, minmax(0, 1fr))' },
    'grid-cols-6': { gridTemplateColumns: 'repeat(6, minmax(0, 1fr))' },
    'grid-cols-7': { gridTemplateColumns: 'repeat(7, minmax(0, 1fr))' },
    'grid-cols-8': { gridTemplateColumns: 'repeat(8, minmax(0, 1fr))' },
    'grid-cols-9': { gridTemplateColumns: 'repeat(9, minmax(0, 1fr))' },
    'grid-cols-10': { gridTemplateColumns: 'repeat(10, minmax(0, 1fr))' },
    'grid-cols-11': { gridTemplateColumns: 'repeat(11, minmax(0, 1fr))' },
    'grid-cols-12': { gridTemplateColumns: 'repeat(12, minmax(0, 1fr))' },
    'grid-cols-none': { gridTemplateColumns: 'none' },

    'gap-0': { gap: '0px' },
    'gap-x-0': { columnGap: '0px' },
    'gap-y-0': { rowGap: '0px' },
    'gap-px': { gap: '1px' },
    'gap-x-px': { columnGap: '1px' },
    'gap-y-px': { rowGap: '1px' },
    'gap-0.5': { gap: '0.125rem' },
    'gap-x-0.5': { columnGap: '0.125rem' },
    'gap-y-0.5': { rowGap: '0.125rem' },

    'text-left': { textAlign: 'left' },
    'text-center': { textAlign: 'center' },
    'text-right': { textAlign: 'right' },
    'text-justify': { textAlign: 'justify' },

    underline: { textDecoration: 'underline' },
    'line-through': { textDecoration: 'line-through' },
    'no-underline': { textDecoration: 'none' },

    'text-xs': { fontSize: '0.75rem', lineHeight: '1rem' },
    'text-sm': { fontSize: '0.875rem', lineHeight: '1.25rem' },
    'text-base': { fontSize: '1rem', lineHeight: '1.5rem' },
    'text-lg': { fontSize: '1.125rem', lineHeight: '1.75rem' },
    'text-xl': { fontSize: '1.25rem', lineHeight: '1.75rem' },
    'text-2xl': { fontSize: '1.5rem', lineHeight: '2rem' },
    'text-3xl': { fontSize: '1.875rem', lineHeight: '2.25rem' },
    'text-4xl': { fontSize: '2.25rem', lineHeight: '2.5rem' },
    'text-5xl': { fontSize: '3rem', lineHeight: 1 },
    'text-6xl': { fontSize: '3.75rem', lineHeight: 1 },
    'text-7xl': { fontSize: '4.5rem', lineHeight: 1 },
    'text-8xl': { fontSize: '6rem', lineHeight: 1 },
    'text-9xl': { fontSize: '8rem', lineHeight: 1 },

    uppercase: { textTransform: 'uppercase' },
    lowercase: { textTransform: 'lowercase' },
    capitalize: { textTransform: 'uppercase' },

    'font-thin': { fontWeight: 100 },
    'font-extralight': { fontWeight: 200 },
    'font-light': { fontWeight: 300 },
    'font-normal': { fontWeight: 400 },
    'font-medium': { fontWeight: 500 },
    'font-semibold': { fontWeight: 600 },
    'font-bold': { fontWeight: 700 },
    'font-extrabold': { fontWeight: 800 },
    'font-black': { fontWeight: 900 },

    'font-sans': {
        fontFamily:
            'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    },
    'font-serif': { fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif' },
    'font-mono': {
        fontFamily:
            'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    },
    'tracking-lighter': { letterSpacing: '-0.05em' },
    'tracking-tight': { letterSpacing: '-0.025em' },
    'tracking-normal': { letterSpacing: '0em' },
    'tracking-wide': { letterSpacing: '0.025em' },
    'tracking-wider': { letterSpacing: '0.05em' },
    'tracking-widest': { letterSpacing: '0.1em' },

    'm-auto': { margin: 'auto' },
    'm-0': { margin: 0 },
    'm-1': { margin: '0.25rem' },
    'm-1.5': { margin: '0.375rem' },
    'm-2': { margin: '0.5rem' },
    'm-2.5': { margin: '0.625rem' },
    'm-3': { margin: '0.75rem' },
    'm-3.5': { margin: '0.875rem' },
    'm-4': { margin: '1rem' },
    'm-5': { margin: '1.25rem' },
    'm-6': { margin: '1.5rem' },
    'm-7': { margin: '1.75rem' },
    'm-8': { margin: '2rem' },
    'm-9': { margin: '2.25rem' },
    'm-10': { margin: '2.5rem' },
    'm-11': { margin: '2.75rem' },
    'm-12': { margin: '3rem' },
    'm-14': { margin: '3.5rem' },
    'm-16': { margin: '4rem' },
    'm-20': { margin: '5rem' },
    'm-24': { margin: '6rem' },
    'm-28': { margin: '7rem' },
    'm-32': { margin: '8rem' },
    'm-36': { margin: '9rem' },
    'm-40': { margin: '10rem' },
    'm-44': { margin: '11rem' },
    'm-48': { margin: '12rem' },
    'm-52': { margin: '13rem' },
    'm-56': { margin: '14rem' },
    'm-60': { margin: '15rem' },
    'm-64': { margin: '16rem' },
    'm-72': { margin: '18rem' },
    'm-80': { margin: '20rem' },
    'm-96': { margin: '24rem' },

    'mt-1': { marginTop: '0.25rem' },
    'mt-1.5': { marginTop: '0.375rem' },
    'mt-2': { marginTop: '0.5rem' },
    'mt-2.5': { marginTop: '0.625rem' },
    'mt-3': { marginTop: '0.75rem' },
    'mt-3.5': { marginTop: '0.875rem' },
    'mt-4': { marginTop: '1rem' },
    'mt-5': { marginTop: '1.25rem' },
    'mt-6': { marginTop: '1.5rem' },
    'mt-7': { marginTop: '1.75rem' },
    'mt-8': { marginTop: '2rem' },
    'mt-9': { marginTop: '2.25rem' },
    'mt-10': { marginTop: '2.5rem' },
    'mt-11': { marginTop: '2.75rem' },
    'mt-12': { marginTop: '3rem' },
    'mt-14': { marginTop: '3.5rem' },
    'mt-16': { marginTop: '4rem' },
    'mt-20': { marginTop: '5rem' },
    'mt-24': { marginTop: '6rem' },
    'mt-28': { marginTop: '7rem' },
    'mt-32': { marginTop: '8rem' },
    'mt-36': { marginTop: '9rem' },
    'mt-40': { marginTop: '10rem' },
    'mt-44': { marginTop: '11rem' },
    'mt-48': { marginTop: '12rem' },
    'mt-52': { marginTop: '13rem' },
    'mt-56': { marginTop: '14rem' },
    'mt-60': { marginTop: '15rem' },
    'mt-64': { marginTop: '16rem' },
    'mt-72': { marginTop: '18rem' },
    'mt-80': { marginTop: '20rem' },
    'mt-96': { marginTop: '24rem' },

    'mr-1': { marginRight: '0.25rem' },
    'mr-1.5': { marginRight: '0.375rem' },
    'mr-2': { marginRight: '0.5rem' },
    'mr-2.5': { marginRight: '0.625rem' },
    'mr-3': { marginRight: '0.75rem' },
    'mr-3.5': { marginRight: '0.875rem' },
    'mr-4': { marginRight: '1rem' },
    'mr-5': { marginRight: '1.25rem' },
    'mr-6': { marginRight: '1.5rem' },
    'mr-7': { marginRight: '1.75rem' },
    'mr-8': { marginRight: '2rem' },
    'mr-9': { marginRight: '2.25rem' },
    'mr-10': { marginRight: '2.5rem' },
    'mr-11': { marginRight: '2.75rem' },
    'mr-12': { marginRight: '3rem' },
    'mr-14': { marginRight: '3.5rem' },
    'mr-16': { marginRight: '4rem' },
    'mr-20': { marginRight: '5rem' },
    'mr-24': { marginRight: '6rem' },
    'mr-28': { marginRight: '7rem' },
    'mr-32': { marginRight: '8rem' },
    'mr-36': { marginRight: '9rem' },
    'mr-40': { marginRight: '10rem' },
    'mr-44': { marginRight: '11rem' },
    'mr-48': { marginRight: '12rem' },
    'mr-52': { marginRight: '13rem' },
    'mr-56': { marginRight: '14rem' },
    'mr-60': { marginRight: '15rem' },
    'mr-64': { marginRight: '16rem' },
    'mr-72': { marginRight: '18rem' },
    'mr-80': { marginRight: '20rem' },
    'mr-96': { marginRight: '24rem' },

    'mb-1': { marginBottom: '0.25rem' },
    'mb-1.5': { marginBottom: '0.375rem' },
    'mb-2': { marginBottom: '0.5rem' },
    'mb-2.5': { marginBottom: '0.625rem' },
    'mb-3': { marginBottom: '0.75rem' },
    'mb-3.5': { marginBottom: '0.875rem' },
    'mb-4': { marginBottom: '1rem' },
    'mb-5': { marginBottom: '1.25rem' },
    'mb-6': { marginBottom: '1.5rem' },
    'mb-7': { marginBottom: '1.75rem' },
    'mb-8': { marginBottom: '2rem' },
    'mb-9': { marginBottom: '2.25rem' },
    'mb-10': { marginBottom: '2.5rem' },
    'mb-11': { marginBottom: '2.75rem' },
    'mb-12': { marginBottom: '3rem' },
    'mb-14': { marginBottom: '3.5rem' },
    'mb-16': { marginBottom: '4rem' },
    'mb-20': { marginBottom: '5rem' },
    'mb-24': { marginBottom: '6rem' },
    'mb-28': { marginBottom: '7rem' },
    'mb-32': { marginBottom: '8rem' },
    'mb-36': { marginBottom: '9rem' },
    'mb-40': { marginBottom: '10rem' },
    'mb-44': { marginBottom: '11rem' },
    'mb-48': { marginBottom: '12rem' },
    'mb-52': { marginBottom: '13rem' },
    'mb-56': { marginBottom: '14rem' },
    'mb-60': { marginBottom: '15rem' },
    'mb-64': { marginBottom: '16rem' },
    'mb-72': { marginBottom: '18rem' },
    'mb-80': { marginBottom: '20rem' },
    'mb-96': { marginBottom: '24rem' },

    'ml-1': { marginLeft: '0.25rem' },
    'ml-1.5': { marginLeft: '0.375rem' },
    'ml-2': { marginLeft: '0.5rem' },
    'ml-2.5': { marginLeft: '0.625rem' },
    'ml-3': { marginLeft: '0.75rem' },
    'ml-3.5': { marginLeft: '0.875rem' },
    'ml-4': { marginLeft: '1rem' },
    'ml-5': { marginLeft: '1.25rem' },
    'ml-6': { marginLeft: '1.5rem' },
    'ml-7': { marginLeft: '1.75rem' },
    'ml-8': { marginLeft: '2rem' },
    'ml-9': { marginLeft: '2.25rem' },
    'ml-10': { marginLeft: '2.5rem' },
    'ml-11': { marginLeft: '2.75rem' },
    'ml-12': { marginLeft: '3rem' },
    'ml-14': { marginLeft: '3.5rem' },
    'ml-16': { marginLeft: '4rem' },
    'ml-20': { marginLeft: '5rem' },
    'ml-24': { marginLeft: '6rem' },
    'ml-28': { marginLeft: '7rem' },
    'ml-32': { marginLeft: '8rem' },
    'ml-36': { marginLeft: '9rem' },
    'ml-40': { marginLeft: '10rem' },
    'ml-44': { marginLeft: '11rem' },
    'ml-48': { marginLeft: '12rem' },
    'ml-52': { marginLeft: '13rem' },
    'ml-56': { marginLeft: '14rem' },
    'ml-60': { marginLeft: '15rem' },
    'ml-64': { marginLeft: '16rem' },
    'ml-72': { marginLeft: '18rem' },
    'ml-80': { marginLeft: '20rem' },
    'ml-96': { marginLeft: '24rem' },

    'my-auto': { marginTop: 'auto', marginBottom: 'auto' },
    'my-0': { marginTop: 0, marginBottom: 0 },
    'my--px': { marginTop: '1px', marginBottom: '1px' },
    'my-0.5': { marginTop: '0.125rem', marginBottom: '0.125rem' },
    'my-1': { marginTop: '0.25rem', marginBottom: '0.25rem' },
    'my-1.5': { marginTop: '0.375rem', marginBottom: '0.375rem' },
    'my-2': { marginTop: '0.5rem', marginBottom: '0.5rem' },
    'my-2.5': { marginTop: '0.625rem', marginBottom: '0.625rem' },
    'my-3': { marginTop: '0.75rem', marginBottom: '0.75rem' },
    'my-3.5': { marginTop: '0.875rem', marginBottom: '0.875rem' },
    'my-4': { marginTop: '1rem', marginBottom: '1rem' },
    'my-5': { marginTop: '1.25rem', marginBottom: '1.25rem' },
    'my-6': { marginTop: '1.5rem', marginBottom: '1.5rem' },
    'my-7': { marginTop: '1.75rem', marginBottom: '1.75rem' },
    'my-8': { marginTop: '2rem', marginBottom: '2rem' },
    'my-9': { marginTop: '2.25rem', marginBottom: '2.25rem' },
    'my-10': { marginTop: '2.5rem', marginBottom: '2.5rem' },
    'my-11': { marginTop: '2.75rem', marginBottom: '2.75rem' },
    'my-12': { marginTop: '3rem', marginBottom: '3rem' },
    'my-14': { marginTop: '3.5rem', marginBottom: '3.5rem' },
    'my-16': { marginTop: '4rem', marginBottom: '4rem' },
    'my-20': { marginTop: '5rem', marginBottom: '5rem' },
    'my-24': { marginTop: '6rem', marginBottom: '6rem' },
    'my-28': { marginTop: '7rem', marginBottom: '7rem' },
    'my-32': { marginTop: '8rem', marginBottom: '8rem' },
    'my-36': { marginTop: '9rem', marginBottom: '9rem' },
    'my-40': { marginTop: '10rem', marginBottom: '10rem' },
    'my-44': { marginTop: '11rem', marginBottom: '11rem' },
    'my-48': { marginTop: '12rem', marginBottom: '12rem' },
    'my-52': { marginTop: '13rem', marginBottom: '13rem' },
    'my-56': { marginTop: '14rem', marginBottom: '14rem' },
    'my-60': { marginTop: '15rem', marginBottom: '15rem' },
    'my-64': { marginTop: '16rem', marginBottom: '16rem' },
    'my-72': { marginTop: '18rem', marginBottom: '18rem' },
    'my-80': { marginTop: '20rem', marginBottom: '20rem' },
    'my-96': { marginTop: '24rem', marginBottom: '24rem' },

    'max-h-[32px]': { maxHeight: '32px' },
    'h-[48px]': { height: '48px' },
    'h-[32px]': { height: '32px' },
    'h-[24px]': { height: '24px' },
    'h-[20px]': { height: '20px' },
    'h-[16px]': { height: '16px' },
    'h-[12px]': { height: '12px' },
    'h-[10px]': { height: '10px' },

    'p-auto': { padding: 'auto' },
    'p-0': { padding: 0 },
    'p-1': { padding: '0.25rem' },
    'p-1.5': { padding: '0.375rem' },
    'p-2': { padding: '0.5rem' },
    'p-2.5': { padding: '0.625rem' },
    'p-3': { padding: '0.75rem' },
    'p-3.5': { padding: '0.875rem' },
    'p-4': { padding: '1rem' },
    'p-5': { padding: '1.25rem' },
    'p-6': { padding: '1.5rem' },
    'p-7': { padding: '1.75rem' },
    'p-8': { padding: '2rem' },
    'p-9': { padding: '2.25rem' },
    'p-10': { padding: '2.5rem' },
    'p-11': { padding: '2.75rem' },
    'p-12': { padding: '3rem' },
    'p-14': { padding: '3.5rem' },
    'p-16': { padding: '4rem' },
    'p-20': { padding: '5rem' },
    'p-24': { padding: '6rem' },
    'p-28': { padding: '7rem' },
    'p-32': { padding: '8rem' },
    'p-36': { padding: '9rem' },
    'p-40': { padding: '10rem' },
    'p-44': { padding: '11rem' },
    'p-48': { padding: '12rem' },
    'p-52': { padding: '13rem' },
    'p-56': { padding: '14rem' },
    'p-60': { padding: '15rem' },
    'p-64': { padding: '16rem' },
    'p-72': { padding: '18rem' },
    'p-80': { padding: '20rem' },
    'p-96': { padding: '24rem' },

    'pt-1': { paddingTop: '0.25rem' },
    'pt-1.5': { paddingTop: '0.375rem' },
    'pt-2': { paddingTop: '0.5rem' },
    'pt-2.5': { paddingTop: '0.625rem' },
    'pt-3': { paddingTop: '0.75rem' },
    'pt-3.5': { paddingTop: '0.875rem' },
    'pt-4': { paddingTop: '1rem' },
    'pt-5': { paddingTop: '1.25rem' },
    'pt-6': { paddingTop: '1.5rem' },
    'pt-7': { paddingTop: '1.75rem' },
    'pt-8': { paddingTop: '2rem' },
    'pt-9': { paddingTop: '2.25rem' },
    'pt-10': { paddingTop: '2.5rem' },
    'pt-11': { paddingTop: '2.75rem' },
    'pt-12': { paddingTop: '3rem' },
    'pt-14': { paddingTop: '3.5rem' },
    'pt-16': { paddingTop: '4rem' },
    'pt-20': { paddingTop: '5rem' },
    'pt-24': { paddingTop: '6rem' },
    'pt-28': { paddingTop: '7rem' },
    'pt-32': { paddingTop: '8rem' },
    'pt-36': { paddingTop: '9rem' },
    'pt-40': { paddingTop: '10rem' },
    'pt-44': { paddingTop: '11rem' },
    'pt-48': { paddingTop: '12rem' },
    'pt-52': { paddingTop: '13rem' },
    'pt-56': { paddingTop: '14rem' },
    'pt-60': { paddingTop: '15rem' },
    'pt-64': { paddingTop: '16rem' },
    'pt-72': { paddingTop: '18rem' },
    'pt-80': { paddingTop: '20rem' },
    'pt-96': { paddingTop: '24rem' },

    'pr-1': { paddingRight: '0.25rem' },
    'pr-1.5': { paddingRight: '0.375rem' },
    'pr-2': { paddingRight: '0.5rem' },
    'pr-2.5': { paddingRight: '0.625rem' },
    'pr-3': { paddingRight: '0.75rem' },
    'pr-3.5': { paddingRight: '0.875rem' },
    'pr-4': { paddingRight: '1rem' },
    'pr-5': { paddingRight: '1.25rem' },
    'pr-6': { paddingRight: '1.5rem' },
    'pr-7': { paddingRight: '1.75rem' },
    'pr-8': { paddingRight: '2rem' },
    'pr-9': { paddingRight: '2.25rem' },
    'pr-10': { paddingRight: '2.5rem' },
    'pr-11': { paddingRight: '2.75rem' },
    'pr-12': { paddingRight: '3rem' },
    'pr-14': { paddingRight: '3.5rem' },
    'pr-16': { paddingRight: '4rem' },
    'pr-20': { paddingRight: '5rem' },
    'pr-24': { paddingRight: '6rem' },
    'pr-28': { paddingRight: '7rem' },
    'pr-32': { paddingRight: '8rem' },
    'pr-36': { paddingRight: '9rem' },
    'pr-40': { paddingRight: '10rem' },
    'pr-44': { paddingRight: '11rem' },
    'pr-48': { paddingRight: '12rem' },
    'pr-52': { paddingRight: '13rem' },
    'pr-56': { paddingRight: '14rem' },
    'pr-60': { paddingRight: '15rem' },
    'pr-64': { paddingRight: '16rem' },
    'pr-72': { paddingRight: '18rem' },
    'pr-80': { paddingRight: '20rem' },
    'pr-96': { paddingRight: '24rem' },

    'pb-1': { paddingBottom: '0.25rem' },
    'pb-1.5': { paddingBottom: '0.375rem' },
    'pb-2': { paddingBottom: '0.5rem' },
    'pb-2.5': { paddingBottom: '0.625rem' },
    'pb-3': { paddingBottom: '0.75rem' },
    'pb-3.5': { paddingBottom: '0.875rem' },
    'pb-4': { paddingBottom: '1rem' },
    'pb-5': { paddingBottom: '1.25rem' },
    'pb-6': { paddingBottom: '1.5rem' },
    'pb-7': { paddingBottom: '1.75rem' },
    'pb-8': { paddingBottom: '2rem' },
    'pb-9': { paddingBottom: '2.25rem' },
    'pb-10': { paddingBottom: '2.5rem' },
    'pb-11': { paddingBottom: '2.75rem' },
    'pb-12': { paddingBottom: '3rem' },
    'pb-14': { paddingBottom: '3.5rem' },
    'pb-16': { paddingBottom: '4rem' },
    'pb-20': { paddingBottom: '5rem' },
    'pb-24': { paddingBottom: '6rem' },
    'pb-28': { paddingBottom: '7rem' },
    'pb-32': { paddingBottom: '8rem' },
    'pb-36': { paddingBottom: '9rem' },
    'pb-40': { paddingBottom: '10rem' },
    'pb-44': { paddingBottom: '11rem' },
    'pb-48': { paddingBottom: '12rem' },
    'pb-52': { paddingBottom: '13rem' },
    'pb-56': { paddingBottom: '14rem' },
    'pb-60': { paddingBottom: '15rem' },
    'pb-64': { paddingBottom: '16rem' },
    'pb-72': { paddingBottom: '18rem' },
    'pb-80': { paddingBottom: '20rem' },
    'pb-96': { paddingBottom: '24rem' },

    'pl-1': { paddingLeft: '0.25rem' },
    'pl-1.5': { paddingLeft: '0.375rem' },
    'pl-2': { paddingLeft: '0.5rem' },
    'pl-2.5': { paddingLeft: '0.625rem' },
    'pl-3': { paddingLeft: '0.75rem' },
    'pl-3.5': { paddingLeft: '0.875rem' },
    'pl-4': { paddingLeft: '1rem' },
    'pl-5': { paddingLeft: '1.25rem' },
    'pl-6': { paddingLeft: '1.5rem' },
    'pl-7': { paddingLeft: '1.75rem' },
    'pl-8': { paddingLeft: '2rem' },
    'pl-9': { paddingLeft: '2.25rem' },
    'pl-10': { paddingLeft: '2.5rem' },
    'pl-11': { paddingLeft: '2.75rem' },
    'pl-12': { paddingLeft: '3rem' },
    'pl-14': { paddingLeft: '3.5rem' },
    'pl-16': { paddingLeft: '4rem' },
    'pl-20': { paddingLeft: '5rem' },
    'pl-24': { paddingLeft: '6rem' },
    'pl-28': { paddingLeft: '7rem' },
    'pl-32': { paddingLeft: '8rem' },
    'pl-36': { paddingLeft: '9rem' },
    'pl-40': { paddingLeft: '10rem' },
    'pl-44': { paddingLeft: '11rem' },
    'pl-48': { paddingLeft: '12rem' },
    'pl-52': { paddingLeft: '13rem' },
    'pl-56': { paddingLeft: '14rem' },
    'pl-60': { paddingLeft: '15rem' },
    'pl-64': { paddingLeft: '16rem' },
    'pl-72': { paddingLeft: '18rem' },
    'pl-80': { paddingLeft: '20rem' },
    'pl-96': { paddingLeft: '24rem' },

    'px-0': { paddingLeft: 0, paddingRight: 0 },
    'px-px': { paddingLeft: '1px', paddingRight: '1px' },
    'px-0.5': { paddingLeft: '0.125rem', paddingRight: '0.125rem' },
    'px-1': { paddingLeft: '0.25rem', paddingRight: '0.25rem' },
    'px-1.5': { paddingLeft: '0.375rem', paddingRight: '0.375rem' },
    'px-2': { paddingLeft: '0.5rem', paddingRight: '0.5rem' },
    'px-2.5': { paddingLeft: '0.625rem', paddingRight: '0.625rem' },
    'px-3': { paddingLeft: '0.75rem', paddingRight: '0.75rem' },
    'px-3.5': { paddingLeft: '0.875rem', paddingRight: '0.875rem' },
    'px-4': { paddingLeft: '1rem', paddingRight: '1rem' },
    'px-5': { paddingLeft: '1.25rem', paddingRight: '1.25rem' },
    'px-6': { paddingLeft: '1.5rem', paddingRight: '1.5rem' },
    'px-7': { paddingLeft: '1.75rem', paddingRight: '1.75rem' },
    'px-8': { paddingLeft: 'rem', paddingRight: '2rem' },
    'px-9': { paddingLeft: '2.25rem', paddingRight: '2.25rem' },
    'px-10': { paddingLeft: '2.5rem', paddingRight: '2.5rem' },
    'px-11': { paddingLeft: '2.75rem', paddingRight: '2.75rem' },
    'px-12': { paddingLeft: '3rem', paddingRight: '3rem' },
    'px-14': { paddingLeft: '3.5rem', paddingRight: '3.5rem' },
    'px-16': { paddingLeft: '4rem', paddingRight: '4rem' },
    'px-20': { paddingLeft: '5rem', paddingRight: '5rem' },
    'px-24': { paddingLeft: '6rem', paddingRight: '6rem' },
    'px-28': { paddingLeft: '7rem', paddingRight: '7rem' },
    'px-32': { paddingLeft: '8rem', paddingRight: '8rem' },
    'px-36': { paddingLeft: '9rem', paddingRight: '9rem' },
    'px-40': { paddingLeft: '10rem', paddingRight: '10rem' },
    'px-44': { paddingLeft: '11rem', paddingRight: '11rem' },
    'px-48': { paddingLeft: '12rem', paddingRight: '12rem' },
    'px-52': { paddingLeft: '13rem', paddingRight: '13rem' },
    'px-56': { paddingLeft: '14rem', paddingRight: '14rem' },
    'px-60': { paddingLeft: '15rem', paddingRight: '15rem' },
    'px-64': { paddingLeft: '16rem', paddingRight: '16rem' },
    'px-72': { paddingLeft: '18rem', paddingRight: '18rem' },
    'px-80': { paddingLeft: '20rem', paddingRight: '20rem' },
    'px-96': { paddingLeft: '24rem', paddingRight: '24rem' },

    'py-0': { paddingTop: 0, paddingBottom: 0 },
    'py--px': { paddingTop: '1px', paddingBottom: '1px' },
    'py-0.5': { paddingTop: '0.125rem', paddingBottom: '0.125rem' },
    'py-1': { paddingTop: '0.25rem', paddingBottom: '0.25rem' },
    'py-1.5': { paddingTop: '0.375rem', paddingBottom: '0.375rem' },
    'py-2': { paddingTop: '0.5rem', paddingBottom: '0.5rem' },
    'py-2.5': { paddingTop: '0.625rem', paddingBottom: '0.625rem' },
    'py-3': { paddingTop: '0.75rem', paddingBottom: '0.75rem' },
    'py-3.5': { paddingTop: '0.875rem', paddingBottom: '0.875rem' },
    'py-4': { paddingTop: '1rem', paddingBottom: '1rem' },
    'py-5': { paddingTop: '1.25rem', paddingBottom: '1.25rem' },
    'py-6': { paddingTop: '1.5rem', paddingBottom: '1.5rem' },
    'py-7': { paddingTop: '1.75rem', paddingBottom: '1.75rem' },
    'py-8': { paddingTop: '2rem', paddingBottom: '2rem' },
    'py-9': { paddingTop: '2.25rem', paddingBottom: '2.25rem' },
    'py-10': { paddingTop: '2.5rem', paddingBottom: '2.5rem' },
    'py-11': { paddingTop: '2.75rem', paddingBottom: '2.75rem' },
    'py-12': { paddingTop: '3rem', paddingBottom: '3rem' },
    'py-14': { paddingTop: '3.5rem', paddingBottom: '3.5rem' },
    'py-16': { paddingTop: '4rem', paddingBottom: '4rem' },
    'py-20': { paddingTop: '5rem', paddingBottom: '5rem' },
    'py-24': { paddingTop: '6rem', paddingBottom: '6rem' },
    'py-28': { paddingTop: '7rem', paddingBottom: '7rem' },
    'py-32': { paddingTop: '8rem', paddingBottom: '8rem' },
    'py-36': { paddingTop: '9rem', paddingBottom: '9rem' },
    'py-40': { paddingTop: '10rem', paddingBottom: '10rem' },
    'py-44': { paddingTop: '11rem', paddingBottom: '11rem' },
    'py-48': { paddingTop: '12rem', paddingBottom: '12rem' },
    'py-52': { paddingTop: '13rem', paddingBottom: '13rem' },
    'py-56': { paddingTop: '14rem', paddingBottom: '14rem' },
    'py-60': { paddingTop: '15rem', paddingBottom: '15rem' },
    'py-64': { paddingTop: '16rem', paddingBottom: '16rem' },
    'py-72': { paddingTop: '18rem', paddingBottom: '18rem' },
    'py-80': { paddingTop: '20rem', paddingBottom: '20rem' },
    'py-96': { paddingTop: '24rem', paddingBottom: '24rem' },

    'h-1': { height: '0.25rem' },
    'h-2': { height: '0.5rem' },
    'h-3': { height: '0.75rem' },
    'h-4': { height: '1rem' },
    'h-8': { height: '2rem' },
    'h-10': { height: '2.5rem' },
    'h-12': { height: '3rem' },
    'h-16': { height: '4rem' },
    'h-20': { height: '5rem' },
    'h-24': { height: '6rem' },
    'h-28': { height: '7rem' },
    'h-32': { height: '8rem' },
    'h-36': { height: '9rem' },
    'h-40': { height: '10rem' },
    'h-44': { height: '11rem' },
    'h-48': { height: '12rem' },
    'h-52': { height: '13rem' },
    'h-56': { height: '14rem' },
    'h-60': { height: '15rem' },
    'h-64': { height: '16rem' },
    'h-72': { height: '18rem' },
    'h-80': { height: '20rem' },
    'h-96': { height: '24rem' },
    'h-auto': { height: 'auto' },
    'h-1/2': { height: '50%' },
    'h-1/3': { height: '33.333333%' },
    'h-2/3': { height: '66.666667%' },
    'h-1/4': { height: '25%' },
    'h-2/4': { height: '50%' },
    'h-3/4': { height: '75%' },
    'h-1/5': { height: '20%' },
    'h-2/5': { height: '40%' },
    'h-3/5': { height: '60%' },
    'h-4/5': { height: '80%' },
    'h-1/6': { height: '16.666667%' },
    'h-2/6': { height: '33.333333%' },
    'h-3/6': { height: '50%' },
    'h-4/6': { height: '66.666667%' },
    'h-5/6': { height: '83.333333%' },
    'h-1/12': { height: '8.333333%' },
    'h-2/12': { height: '16.666667%' },
    'h-3/12': { height: '25%' },
    'h-4/12': { height: '33.333333%' },
    'h-5/12': { height: '41.666667%' },
    'h-6/12': { height: '50%' },
    'h-7/12': { height: '58.333333%' },
    'h-8/12': { height: '66.666667%' },
    'h-9/12': { height: '75%' },
    'h-10/12': { height: '83.333333%' },
    'h-11/12': { height: '91.666667%' },
    'h-full': { height: '100%' },
    'h-screen': { height: '100vw' },
    'h-min': { height: 'min-content' },
    'h-max': { height: 'max-content' },

    'min-w-0': { minWidth: 0 },
    'min-w-full': { minWidth: '100%' },
    'min-w-min': { minWidth: 'min-content' },
    'min-w-max': { minWidth: 'max-content' },
    'min-w-fit': { minWidth: 'fit-content' },

    'max-w-0': { maxWidth: '0rem' },
    'max-w-none': { maxWidth: 'none' },
    'max-w-xs': { maxWidth: '20rem' },
    'max-w-sm': { maxWidth: '24rem' },
    'max-w-md': { maxWidth: '28rem' },
    'max-w-lg': { maxWidth: '32rem' },
    'max-w-xl': { maxWidth: '36rem' },
    'max-w-2xl': { maxWidth: '42rem' },
    'max-w-3xl': { maxWidth: '48rem' },
    'max-w-4xl': { maxWidth: '56rem' },
    'max-w-5xl': { maxWidth: '64rem' },
    'max-w-6xl': { maxWidth: '72rem' },
    'max-w-7xl': { maxWidth: '80rem' },
    'max-w-full': { maxWidth: '100%' },
    'max-w-min': { maxWidth: 'min-content' },
    'max-w-max': { maxWidth: 'max-content' },
    'max-w-fit': { maxWidth: 'fit-content' },
    'max-w-prose': { maxWidth: '65ch' },

    'justify-start': { justifyContent: 'flex-start' },
    'justify-end': { justifyContent: 'flex-end' },
    'justify-center': { justifyContent: 'center' },
    'justify-between': { justifyContent: 'space-between' },
    'justify-around': { justifyContent: 'space-around' },
    'justify-evenly': { justifyContent: 'space-evenly' },

    'justify-items-start': { justifyItems: 'start' },
    'justify-items-end': { justifyItems: 'end' },
    'justify-items-center': { justifyItems: 'center' },
    'justify-items-stretch': { justifyItems: 'stretch' },

    'justify-self-auto': { justifySelf: 'auto' },
    'justify-self-start': { justifySelf: 'start' },
    'justify-self-end': { justifySelf: 'end' },
    'justify-self-center': { justifySelf: 'center' },
    'justify-self-stretch': { justifySelf: 'stretch' },

    'content-center': { alignContent: 'center' },
    'content-start': { alignContent: 'flex-start' },
    'content-end': { alignContent: 'flex-end' },
    'content-between': { alignContent: 'space-between' },
    'content-around': { alignContent: 'space-around' },
    'content-evenly': { alignContent: 'space-evenly' },

    'mx-auto': { marginLeft: 'auto', marginRight: 'auto' },
    'mx-2': { marginLeft: '0.5rem', marginRight: '0.5rem' },

    'items-start': { alignItems: 'flex-start' },
    'items-end': { alignItems: 'flex-end' },
    'items-center': { alignItems: 'flex-center' },
    'items-baseline': { alignItems: 'baseline' },
    'items-stretch': { alignItems: 'stretch' },

    'self-auto': { alignSelf: 'auto' },
    'self-start': { alignSelf: 'flex-start' },
    'self-end': { alignSelf: 'flex-end' },
    'self-center': { alignSelf: 'center' },
    'self-stretch': { alignSelf: 'stretch' },
    'self-baseline': { alignSelf: 'baseline' },

    'place-content-center': { placeContent: 'center' },
    'place-content-start': { placeContent: 'start' },
    'place-content-end': { placeContent: 'end' },
    'place-content-between': { placeContent: 'space-between' },
    'place-content-around': { placeContent: 'space-around' },
    'place-content-evenly': { placeContent: 'space-evenly' },
    'place-content-stretch': { placeContent: 'space-stretch' },

    'place-items-start': { placeItems: 'start' },
    'place-items-end': { placeItems: 'end' },
    'place-items-center': { placeItems: 'center' },
    'place-items-stretch': { placeItems: 'stretch' },

    'place-self-auto': { placeSelf: 'auto' },
    'place-self-start': { placeSelf: 'start' },
    'place-self-end': { placeSelf: 'end' },
    'place-self-center': { placeSelf: 'center' },
    'place-self-stretch': { placeSelf: 'stretch' },

    'rounded-none': { borderRadius: 0 },
    'rounded-sm': { borderRadius: '0.125rem' },
    rounded: { borderRadius: '0.25rem' },
    'rounded-md': { borderRadius: '0.375rem' },
    'rounded-lg': { borderRadius: '0.5rem' },
    'rounded-xl': { borderRadius: '0.75rem' },
    'rounded-2xl': { borderRadius: '1rem' },
    'rounded-3xl': { borderRadius: '1.5rem' },
    'rounded-full': { borderRadius: '9999rem' },

    'rounded-r-lg': { borderTopRightRadius: '0.5rem', borderBottomRightRadius: '0.5rem' },
    'rounded-l-lg': { borderTopLeftRadius: '0.5rem', borderBottomLeftRadius: '0.5rem' },

    'w-0': { width: '0px' },
    'w-px': { width: '1px' },
    'w-0.5': { width: '0.125rem' },
    'w-1': { width: '0.25rem' },
    'w-1.5': { width: '0.375rem' },
    'w-2': { width: '0.5rem' },
    'w-2.5': { width: '0.625rem' },
    'w-3': { width: '0.75rem' },
    'w-3.5': { width: '0.875rem' },
    'w-4': { width: '1rem' },
    'w-5': { width: '1.25rem' },
    'w-6': { width: '1.5rem' },
    'w-7': { width: '1.75rem' },
    'w-8': { width: '2rem' },
    'w-9': { width: '2.25rem' },
    'w-10': { width: '2.5rem' },
    'w-11': { width: '2.75rem' },
    'w-12': { width: '3rem' },
    'w-14': { width: '3.5rem' },
    'w-16': { width: '4rem' },
    'w-20': { width: '5rem' },
    'w-24': { width: '6rem' },
    'w-28': { width: '7rem' },
    'w-32': { width: '8rem' },
    'w-36': { width: '9rem' },
    'w-40': { width: '10rem' },
    'w-44': { width: '11rem' },
    'w-48': { width: '12rem' },
    'w-52': { width: '13rem' },
    'w-56': { width: '14rem' },
    'w-60': { width: '15rem' },
    'w-64': { width: '16rem' },
    'w-72': { width: '18rem' },
    'w-80': { width: '20rem' },
    'w-96': { width: '24rem' },
    'w-auto': { width: 'auto' },
    'w-1/2': { width: '50%' },
    'w-1/3': { width: '33.333333%' },
    'w-2/3': { width: '66.666667%' },
    'w-1/4': { width: '25%' },
    'w-2/4': { width: '50%' },
    'w-3/4': { width: '75%' },
    'w-1/5': { width: '20%' },
    'w-2/5': { width: '40%' },
    'w-3/5': { width: '60%' },
    'w-4/5': { width: '80%' },
    'w-1/6': { width: '16.666667%' },
    'w-2/6': { width: '33.333333%' },
    'w-3/6': { width: '50%' },
    'w-4/6': { width: '66.666667%' },
    'w-5/6': { width: '83.333333%' },
    'w-1/12': { width: '8.333333%' },
    'w-2/12': { width: '16.666667%' },
    'w-3/12': { width: '25%' },
    'w-4/12': { width: '33.333333%' },
    'w-5/12': { width: '41.666667%' },
    'w-6/12': { width: '50%' },
    'w-7/12': { width: '58.333333%' },
    'w-8/12': { width: '66.666667%' },
    'w-9/12': { width: '75%' },
    'w-10/12': { width: '83.333333%' },
    'w-11/12': { width: '91.666667%' },
    'w-full': { width: '100%' },
    'w-screen': { width: '100vw' },
    'w-min': { width: 'min-content' },
    'w-max': { width: 'max-content' },

    'bg-transparent': { backgroundColor: 'transparent' },
    'bg-current': { backgroundColor: 'currentColor' },
    'bg-black': { backgroundColor: 'rgba(0, 0, 0, 1)' },
    'bg-white': { backgroundColor: 'rgba(255, 255, 255, 1)' },
    'bg-gray-50': { backgroundColor: 'rgba(249, 250, 251, 1)' },
    'bg-slate-100': { backgroundColor: 'rgba(241, 245, 249, 1)' },
    'bg-slate-200': { backgroundColor: 'rgba(226, 232, 240, 1)' },
    'bg-slate-300': { backgroundColor: 'rgba(203, 213, 225, 1)' },
    'bg-sky-50': { backgroundColor: 'rgba(240, 249, 255, 1)' },
    'bg-sky-100': { backgroundColor: 'rgba(224, 242, 254, 1)' },
    'bg-sky-200': { backgroundColor: 'rgba(186, 230, 253, 1)' },
    'bg-blue-custom': { backgroundColor: 'rgba(47, 128, 237, 0.9)' },

    border: { borderWidth: '1px' },
    'border-0': { borderWidth: '0px' },
    'border-2': { borderWidth: '2px' },
    'border-4': { borderWidth: '4px' },
    'border-8': { borderWidth: '8px' },
    'border-l': { borderLeftWidth: '1px' },
    'border-l-0': { borderLeftWidth: '0px' },
    'border-l-2': { borderLeftWidth: '2px' },
    'border-l-4': { borderLeftWidth: '4px' },
    'border-l-8': { borderLeftWidth: '8px' },
    'border-b': { borderBottomWidth: '1px' },
    'border-b-0': { borderBottomWidth: '0px' },
    'border-b-2': { borderBottomWidth: '2px' },
    'border-b-4': { borderBottomWidth: '4px' },
    'border-b-8': { borderBottomWidth: '8px' },
    'border-r': { borderRightWidth: '1px' },
    'border-r-0': { borderRightWidth: '0px' },
    'border-r-2': { borderRightWidth: '2px' },
    'border-r-4': { borderRightWidth: '4px' },
    'border-r-8': { borderWidth: '8px' },
    'border-t': { borderTopWidth: '1px' },
    'border-t-0': { borderTopWidth: '0px' },
    'border-t-2': { borderTopWidth: '2px' },
    'border-t-4': { borderTopWidth: '4px' },
    'border-t-8': { borderTopWidth: '8px' },

    'border-transparent': { borderColor: 'transparent' },
    'border-current': { borderColor: 'currentColor' },
    'border-black': { borderColor: 'rgba(0, 0, 0, 1)' },
    'border-white': { borderColor: 'rgba(255, 255, 255, 1)' },
    'border-gray-50': { borderColor: 'rgba(249, 250, 251, 1)' },
    'border-gray-100': { borderColor: 'rgba(243, 244, 246, 1)' },
    'border-blue-50': { borderColor: 'rgba(239, 246, 255, 1)' },
    'border-blue-100': { borderColor: 'rgba(219, 234, 254, 1)' },

    'border-solid': { borderStyle: 'solid' },
    'border-dashed': { borderStyle: 'dashed' },
    'border-dotted': { borderStyle: 'dotted' },
    'border-double': { borderStyle: 'double' },
    'border-none': { borderStyle: 'none' },

    'space-y-2': { marginTop: '0.5rem', marginBottom: '0.5rem' },
    'space-y-4': { marginTop: '1rem', marginBottom: '1rem' },
    'space-x-2': { marginLeft: '0.5rem' },
    'space-x-4': { marginLeft: '1rem' },

    'leading-none': { lineHeight: 1 },
};

export default classes;

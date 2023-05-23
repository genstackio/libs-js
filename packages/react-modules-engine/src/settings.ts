import { styling_settings } from './types';

const settings: styling_settings = {
    shapes: {
        standard: {
            blockShapeClass: 'rounded-md',
            blockHeaderShapeClass: 'rounded-t-md',
            blockFooterShapeClass: 'rounded-b-md',
            itemShapeClass: 'rounded-md',
            logoShapeClass: 'rounded-xl',
        },
        square: {
            blockShapeClass: '',
            blockHeaderShapeClass: '',
            blockFooterShapeClass: '',
            itemShapeClass: '',
            logoShapeClass: '',
        },
        rounded: {
            blockShapeClass: 'rounded-lg',
            blockHeaderShapeClass: 'rounded-t-lg',
            blockFooterShapeClass: 'rounded-b-lg',
            itemShapeClass: 'rounded-lg',
            logoShapeClass: 'rounded-2xl',
        },
        'extra-rounded': {
            blockShapeClass: 'rounded-2xl',
            blockHeaderShapeClass: 'rounded-t-2xl',
            blockFooterShapeClass: 'rounded-b-2xl',
            itemShapeClass: 'rounded-2xl',
            logoShapeClass: 'rounded-3xl',
        },
    },
    paddings: {
        xs: {
            blockHeaderPaddingClass: 'px-4 py-2',
            blockContentPaddingClass: 'p-2',
        },
        sm: {
            blockHeaderPaddingClass: 'px-6 py-4',
            blockContentPaddingClass: 'p-3',
        },
        md: {
            blockHeaderPaddingClass: 'px-8 py-5',
            blockContentPaddingClass: 'p-4',
        },
        standard: {
            blockHeaderPaddingClass: 'px-8 py-5',
            blockContentPaddingClass: 'p-4',
        },
        lg: {
            blockHeaderPaddingClass: 'px-12 py-7',
            blockContentPaddingClass: 'p-6',
        },
    },
    borders: {
        standard: {
            blockHeaderBorderClass: 'border-t border-r border-l',
            blockFooterBorderClass: 'border-b border-r border-l',
            blockContentOpenedBorderClass: 'border-t',
            blockBorderClass: 'border',
            itemBorderClass: 'border',
        },
        bold: {
            blockHeaderBorderClass: 'border-t-2 border-r-2 border-l-2',
            blockFooterBorderClass: 'border-b-2 border-r-2 border-l-2',
            blockContentOpenedBorderClass: 'border-t-2',
            blockBorderClass: 'border-2',
            itemBorderClass: 'border-2',
        },
        none: {
            blockHeaderBorderClass: '',
            blockFooterBorderClass: '',
            blockContentOpenedBorderClass: '',
            blockBorderClass: '',
            itemBorderClass: '',
        },
    },
    borderColors: {
        standard: {
            blockBorderColorClass: 'border-gray-200',
            itemBorderColorClass: 'border-gray-200',
        },
        dark: {
            blockBorderColorClass: 'border-gray-500',
            itemBorderColorClass: 'border-gray-500',
        },
        light: {
            blockBorderColorClass: 'border-gray-100',
            itemBorderColorClass: 'border-gray-100',
        },
        clear: {
            blockBorderColorClass: 'border-white',
            itemBorderColorClass: 'border-white',
        },
    },
    textColors: {
        standard: {
            titleTextColorClass: 'text-go-title',
            invertedTitleTextColorClass: 'text-white',
        },
    },
    backgrounds: {
        standard: {
            invertedBlockHeaderBackgroundClass: 'bg-go-title',
            blockHeaderBackgroundClass: '',
            blockBackgroundClass: 'bg-white',
        },
    },
    textSizes: {
        sm: {
            blockHeaderTextSizeClass: 'font-semibold text-sm',
            blockContentTextSizeClass: 'text-xs',
        },
        standard: {
            blockHeaderTextSizeClass: 'font-semibold text-lg',
            blockContentTextSizeClass: '',
        },
    },
    logoSizes: {
        xs: {
            logoSizeClass: 'h-24 w-24',
        },
        sm: {
            logoSizeClass: 'h-28 w-28',
        },
        standard: {
            logoSizeClass: 'h-32 w-32',
        },
        md: {
            logoSizeClass: 'h-32 w-32',
        },
        lg: {
            logoSizeClass: 'h-40 w-40',
        },
        xl: {
            logoSizeClass: 'h-48 w-48',
        },
    },
    thumbnail0Sizes: {
        standard: {
            thumbnail0SizeClass: 'w-16 h-16 sm:w-20 sm:h-20',
        },
        md: {
            thumbnail0SizeClass: 'w-16 h-16 sm:w-20 sm:h-20',
        },
        lg: {
            thumbnail0SizeClass: 'w-20 h-20 sm:w-24 sm:h-24',
        },
    },
    bannerSizes: {
        auto: {
            bannerSizeClass: 'h-auto',
        },
        standard: {
            bannerSizeClass: 'h-48 sm:h-96',
        },
        md: {
            bannerSizeClass: 'h-48 sm:h-96',
        },
        lg: {
            bannerSizeClass: 'h-60 sm:h-[28rem]',
        },
        xl: {
            bannerSizeClass: 'h-96 sm:h-[32rem]',
        },
    },
    bannerColors: {
        standard: {
            bannerColorClass: 'bg-go-secondary',
        },
        dark: {
            bannerColorClass: 'bg-gray-600',
        },
        none: {
            bannerColorClass: '',
        },
        custom: {
            bannerColorClass: '',
        },
    },
};

export default settings;

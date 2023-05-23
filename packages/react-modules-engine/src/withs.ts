import { image } from '@genstackio/react-types';

export * from '@genstackio/react-types/lib/withs';

export interface WithZoneCustomization {
    bgStyle?: string;
    bgCustom?: string;
    bgColor?: string;
    bgTexture?: string;
    bgImage?: image;
    bgVideoUrl?: string;
    padding?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

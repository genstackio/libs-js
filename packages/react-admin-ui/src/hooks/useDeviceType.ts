import useDeviceTypeMediaQueries from './useDeviceTypeMediaQueries';

export function useDeviceType(mobileFirst = false) {
    const { isMobile, isTablet, isDesktop } = useDeviceTypeMediaQueries();

    return isMobile ? 'mobile' : isTablet ? 'tablet' : isDesktop ? 'desktop' : mobileFirst ? 'mobile' : 'desktop';
}

export default useDeviceType;

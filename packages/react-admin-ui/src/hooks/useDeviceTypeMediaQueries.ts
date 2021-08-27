import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export function useDeviceTypeMediaQueries() {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
    const isTablet = useMediaQuery(theme.breakpoints.up('md')) && !isDesktop;
    const isMobile = !isTablet && !isDesktop;

    return { isMobile, isTablet, isDesktop };
}

export default useDeviceTypeMediaQueries;

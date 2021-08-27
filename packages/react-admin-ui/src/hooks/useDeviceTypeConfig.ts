import useDeviceType from './useDeviceType';

export function useDeviceTypeConfig(configs: any, mobileFirst = false) {
    const deviceType = useDeviceType(mobileFirst);

    return configs[deviceType] || configs[mobileFirst ? 'mobile' : 'desktop'] || {};
}

export default useDeviceTypeConfig;

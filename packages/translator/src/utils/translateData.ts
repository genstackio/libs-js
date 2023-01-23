import singleton from '../singleton';

export async function translateData(
    data: any,
    sourceLocale,
    targetLocale,
    config?: any,
    options?: { replacer?: Function; mergeBack?: boolean },
) {
    return singleton.translateData(data, sourceLocale, targetLocale, config, options);
}

export default translateData;

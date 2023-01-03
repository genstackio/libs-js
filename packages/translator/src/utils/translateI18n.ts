import singleton from "../singleton";

export async function translateI18n(data: any, refData: any, sourceLocale, targetLocale, config?: any, options?: any) {
    return singleton.translateI18n(data, refData, sourceLocale, targetLocale, config, options);
}

export default translateI18n;

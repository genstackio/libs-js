export function cleanModuleType(type: string, aliases: Record<string, string>) {
    return aliases[type || ''] || type;
}

export default cleanModuleType;

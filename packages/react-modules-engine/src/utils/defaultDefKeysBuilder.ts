export function defaultDefKeysBuilder(doc: any) {
    return [`${doc?.type || ''}${doc?.permanent ? `${doc?.type ? '_' : ''}permanent` : ''}`, doc?.type, 'default'];
}

export default defaultDefKeysBuilder;

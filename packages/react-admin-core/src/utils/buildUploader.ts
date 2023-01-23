export function buildUploader(url: string | undefined) {
    return async (_: any, userContext: any) => {
        const { token } = userContext.getTokens() || {};
        if (!url) throw new Error(`No upload url endpoint available`);
        const r = await (await fetch(url!, { headers: { Authorization: `bearer ${token}` } })).json();
        return {
            fields: JSON.parse(r.fields),
            meta: { fileUrl: r.fileUrl },
            url: r.uploadUrl,
        };
    };
}

export default buildUploader;

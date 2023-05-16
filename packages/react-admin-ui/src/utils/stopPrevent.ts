export function stopPrevent(e: any) {
    e?.stopPropagation && e?.stopPropagation();
    e?.preventDefault && e?.preventDefault();
}

export default stopPrevent;

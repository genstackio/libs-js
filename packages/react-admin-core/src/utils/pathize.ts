export function pathize(name: string) {
    let [a, ...b] = name.split(/\//g);
    name = `${a.slice(0, 1).toUpperCase()}${a.slice(1)}`;
    if (b.length) {
        a = `${a.slice(0, 1).toLowerCase()}${a.slice(1)}`;
        const lastIndex = b.length - 1;
        const c = b
            .map((x, index: number) => (index === lastIndex ? `${x.slice(0, 1).toUpperCase()}${x.slice(1)}` : x))
            .join('/');
        name = `${a}/${c}`;
    }
    return name
        .split(/_/g)
        .map((s: string, index: number) => {
            if (0 === index) return s;
            return `${s.slice(0, 1).toUpperCase()}${s.slice(1)}`;
        })
        .join('');
}

export default pathize;

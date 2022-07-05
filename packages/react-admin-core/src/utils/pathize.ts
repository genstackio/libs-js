export function pathize(name: string) {
    let [a, b] = name.split(/\//g);
    name = `${a.slice(0, 1).toUpperCase()}${a.slice(1)}`;
    if (b) {
        a = `${a.slice(0, 1).toLowerCase()}${a.slice(1)}`;
        b = `${b.slice(0, 1).toUpperCase()}${b.slice(1)}`;
        name = `${a}/${b}`;
    }
    return name.split(/_/g).map((s: string, index: number) => {
        if (0 === index) return s;
        return `${s.slice(0, 1).toUpperCase()}${s.slice(1)}`;
    }).join('');
}

export default pathize;

export function prio(x, k) {
    return (x || {})[k] || 0;
}

export default prio;

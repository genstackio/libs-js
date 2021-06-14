export function getInitials(name: string) {
    return name.split(/\s+/g).reduce((acc, t) => acc + t.charAt(0), '').slice(0, 3).toUpperCase()
}

export default getInitials
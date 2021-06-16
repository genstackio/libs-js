import componentFactory from "./componentFactory";

export function screenFactory(name: string, importer: (name: string) => any) {
    return componentFactory(name, importer, 'Screen');
}

export default screenFactory
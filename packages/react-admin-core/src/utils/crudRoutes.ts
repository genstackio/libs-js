import crudTypeRoutes from "./crudTypeRoutes";

export function crudRoutes(types: any) {
    return Object.entries(types || {}).reduce((acc, [k, v]: [string, any]) => [
        ...acc,
        ...crudTypeRoutes(k, v),
    ], [] as any[]);
}

export default crudRoutes;

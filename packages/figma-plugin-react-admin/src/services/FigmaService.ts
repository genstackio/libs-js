import {action} from '../types';

export class FigmaService {
    protected figma: PluginAPI;
    protected actions: action[];
    constructor(figma: PluginAPI) {
        this.figma = figma;
        this.actions = [];
    }
    public getApi() {
        return this.figma;
    }
    public static create(figma, actions: {[key: string]: action}, ui: string) {
        const f = new FigmaService(figma);
        f.addActions(actions);
        f.register();
        f.show(ui);
        return f;
    }
    public register() {
        const z = this;
        this.figma.ui.onmessage = function (msg) {
            const action = z.actions[msg?.type];
            if (!action) return;
            const r = action(msg, {figma: z});
            if (r instanceof Promise) r.then(x => x);
        };
        return this;
    }
    public addActions(actions: {[key: string]: action}) {
        Object.entries(actions).forEach(([name, action]) => {
            this.addAction(name, action);
        });
        return this;
    }
    public addAction(name, action) {
        this.actions[name] = action;
        return this;
    }
    public show(ui: string) {
        this.figma.showUI(ui);
        return this;
    }
    public close() {
        this.figma.closePlugin();
        return this;
    }
}

export default FigmaService;

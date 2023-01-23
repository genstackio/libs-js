import singleton from '../singleton';
import ITranslatorPlugin from '../ITranslatorPlugin';

export async function registerPlugin(name: string, plugin: ITranslatorPlugin, priority: Record<string, number> = {}) {
    singleton.registerPlugin(name, plugin, priority);
}

export default registerPlugin;

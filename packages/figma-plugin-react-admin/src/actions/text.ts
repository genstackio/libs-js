import FigmaService from "../services/FigmaService";

export function text({value}: any, {figma}: {figma: FigmaService}) {
    const t = figma.getApi().createText();

    t.characters = value as string;

    figma.getApi().currentPage.appendChild(t);
}

export default text

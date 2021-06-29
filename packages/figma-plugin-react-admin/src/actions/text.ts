import FigmaService from '../services/FigmaService';

export async function text({ value }: any, { figma }: { figma: FigmaService }) {
    await figma.getApi().loadFontAsync({ family: 'Roboto', style: 'Regular' });
    const t = figma.getApi().createText();
    console.log(t);
    t.fontName = { family: 'Roboto', style: 'Regular' };
    t.characters = value as string;
    figma.getApi().currentPage.appendChild(t);
}

export default text;

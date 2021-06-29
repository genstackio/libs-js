import FigmaService from "../services/FigmaService";

export async function blockButton({value}: any, {figma}: {figma: FigmaService}) {
    await figma.getApi().loadFontAsync({family:"Roboto", style:"Regular"})
    const block = figma.getApi().createStar();
    console.log(block);

    figma.getApi().currentPage.appendChild(block);
}

export default blockButton

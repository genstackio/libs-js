import FigmaService from "../services/FigmaService";

export function rectangleStar({value}: any, {figma}: {figma: FigmaService}) {
    const star = figma.getApi().createStar();
    const rectangle = figma.getApi().createRectangle();

    console.log(rectangle);
    console.log(star);
    figma.getApi().currentPage.appendChild(rectangle);

}

export default rectangleStar

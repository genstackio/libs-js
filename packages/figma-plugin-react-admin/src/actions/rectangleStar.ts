import FigmaService from '../services/FigmaService';

export function rectangleStar({ value }: any, { figma }: { figma: FigmaService }) {
    const star = figma.getApi().createStar();
    const rectangle = figma.getApi().createRectangle();
    const nodeArray: any[] = [];
    nodeArray.push(star);
    nodeArray.push(rectangle);
    const group = figma.getApi().group(nodeArray, figma.getApi().currentPage);
    figma.getApi().currentPage.appendChild(group);
}

export default rectangleStar;

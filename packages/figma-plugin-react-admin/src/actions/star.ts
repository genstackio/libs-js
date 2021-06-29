import FigmaService from '../services/FigmaService';

export function star({ value }: any, { figma }: { figma: FigmaService }) {
    const star = figma.getApi().createStar();
    figma.getApi().currentPage.appendChild(star);
}

export default star;

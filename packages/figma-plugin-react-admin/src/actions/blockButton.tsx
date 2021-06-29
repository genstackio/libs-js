import FigmaService from '../services/FigmaService';

export async function blockButton({ value }: any, { figma }: { figma: FigmaService }) {
    await figma.getApi().importComponentByKeyAsync('Block');
    const block = figma.getApi().createComponent();
    console.log(block);
    figma.getApi().currentPage.appendChild(block);
}

export default blockButton;

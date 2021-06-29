import FigmaService from "../services/FigmaService";

export function close(_, {figma}: {figma: FigmaService}) {
    figma.close();
}

export default close

import { useMemo } from 'react';
import getFirst from '../utils/getFirst';
import getFirstImage from '../utils/getFirstImage';

export function useTypeContainerPageCustomizations(doc: any, page: string) {
    return useMemo(
        () => ({
            bgStyle: getFirst(doc, `${page}PageBackgroundStyle`, 'publicPageBackgroundStyle'),
            bgCustom: getFirst(doc, `${page}PageBackgroundCustom`, 'publicPageBackgroundCustom'),
            bgColor: getFirst(doc, `${page}PageBackgroundColor`, 'publicPageBackgroundColor'),
            bgTexture: getFirst(doc, `${page}PageBackgroundTexture`, 'publicPageBackgroundTexture'),
            bgImage: getFirstImage(doc, `${page}PageBackgroundImage`, 'publicPageBackgroundImage'),
            bgVideoUrl: getFirst(doc, `${page}PageBackgroundVideoUrl`, 'publicPageBackgroundVideoUrl'),
        }),
        [doc, page],
    );
}

export default useTypeContainerPageCustomizations;

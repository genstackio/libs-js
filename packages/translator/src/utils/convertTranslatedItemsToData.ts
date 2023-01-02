import populateObjectFromPathAndValue from "./populateObjectFromPathAndValue";
import {translated_item} from "../types";

export function convertTranslatedItemsToData(items: translated_item[]) {
    return items.reduce((acc, item) => {
        return populateObjectFromPathAndValue(acc, item.item.path, item.translation)
    }, {});
}

export default convertTranslatedItemsToData;

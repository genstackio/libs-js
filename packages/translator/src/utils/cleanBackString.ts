import {decode} from 'html-entities';

export function cleanBackString(s: string) {
    return decode(s, {level: 'xml'});
}

export default cleanBackString;

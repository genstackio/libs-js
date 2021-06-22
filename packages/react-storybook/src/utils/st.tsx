import stbase from './stbase';

export function st(Component, args, opts: any = {}) {
    const story = (Object.assign as any)(stbase(Component, opts).bind({}), {args});
    story.story = story.story || {};
    story.story.parameters = story.story.parameters || {};
    story.story.parameters.themes = {
        list: [
            { name: 'orange', class: 'theme-orange', color: 'orange' },
            { name: 'blue', class: 'theme-blue', color: 'blue' },
            { name: 'green', class: 'theme-green', color: 'green' },
            { name: 'brown', class: 'theme-brown', color: 'brown' }
        ],
    };
    story.story.parameters.grid = {
        columns: 12,
    };
    return story;
}

export default st;

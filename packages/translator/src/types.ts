export type translatable_item = {
    text: string;
    path: string;
};

export type translated_item = {
    translation: string;
    item: translatable_item;
};

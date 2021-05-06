import React from "react";
import {select} from "@storybook/addon-knobs";
import i18nFactory from "../src/utils/i18nFactory";
import translations from "../src/configs/translations";
import {I18nextProvider} from "react-i18next";
import { StylesProvider } from '@material-ui/core/styles';
import "../assets/css/styles.css";

export const langSelect = () => select('lang', translationNames, 'fr-FR');

const translationNames = Object.keys(translations);
translationNames.sort();

export function uiStory(Component, {apiMocks}: {apiMocks: object|false} = {apiMocks: {}}) {
    return args => {
        const lang = langSelect();
        const i18n = i18nFactory({lng: lang});

        return  (
          <StylesProvider injectFirst>
            <I18nextProvider i18n={i18n}>
                <Component {...args} />
            </I18nextProvider>
          </StylesProvider>
        )
    }
}

export function s(Component, args, opts: any = {}) {
    const story = (Object.assign as any)(uiStory(Component, opts).bind({}), {args});
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
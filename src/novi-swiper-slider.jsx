const React = novi.react.React;
import ReplaceImageItem from "./ReplaceImageItem";
import AddSlideItem from "./AddSlideItem";
import RemoveSlideItem from "./RemoveSlideItem";
import SettingsItem from "./SettingsItem";
import Settings from "./Settings";
const Language = novi.language;
const Plugin = {
    name: "novi-plugin-swiper-slider",
    title: "Novi Swiper Slider",
    description: "Novi Swiper Slider description",
    version: "1.0.3",
    dependencies: {
        novi: "0.9.0"
    },
    defaults: {
        querySelector: '.swiper-container',
        effects: [
            {label: "Slide", value: "slide", clearableValue: false},
            {label: "Fade", value: "fade", clearableValue: false}
        ]
    },
    ui: {
        editor: [ReplaceImageItem, AddSlideItem, RemoveSlideItem, SettingsItem],
        settings: <Settings/>,
    },
    onLanguageChange: onLanguageChange
};
function onLanguageChange(plugin){
    let messages = Language.getDataByKey("novi-plugin-swiper-slider");
    plugin.ui.editor[0].title = messages.editor.imageReplace.title;
    plugin.ui.editor[0].tooltip = messages.editor.imageReplace.tooltip;

    plugin.ui.editor[1].title = messages.editor.addSlide.title;
    plugin.ui.editor[1].tooltip = messages.editor.addSlide.tooltip;

    plugin.ui.editor[2].title = messages.editor.removeSlide.title;
    plugin.ui.editor[2].tooltip = messages.editor.removeSlide.tooltip;

    plugin.ui.editor[3].title = messages.editor.settings.title;
    plugin.ui.editor[3].tooltip = messages.editor.settings.tooltip;
    plugin.ui.editor[3].header[1] = <span>{messages.editor.settings.tooltip}</span>;

    return plugin;
}
novi.plugins.register(Plugin);
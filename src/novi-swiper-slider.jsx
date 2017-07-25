const React = novi.react.React;
import ReplaceImageItem from "./ReplaceImageItem";
import AddSlideItem from "./AddSlideItem";
import RemoveSlideItem from "./RemoveSlideItem";
import SettingsItem from "./SettingsItem";
import Settings from "./Settings";

const Plugin = {
    name: "novi-plugin-swiper-slider",
    title: "Novi Swiper Slider",
    description: "Novi Swiper Slider description",
    version: "1.0.0",
    dependencies: {
        novi: "0.8.3"
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
    }
};

novi.plugins.register(Plugin);
import * as Utils from "./Utils";

const React = novi.react.React;
const Icons = novi.ui.icons;
const Icon = novi.ui.icon;
const Types = novi.types;
const messages = novi.language.getDataByKey("novi-plugin-swiper-slider");
const ReplaceImageItem = {
    trigger: <Icon>{Icons.ICON_BG_IMAGE}</Icon>,
    tooltip: messages.editor.imageReplace.tooltip,
    closeIcon: "submit",
    title: messages.editor.imageReplace.title,
    onTriggerClick: onClick
};

export default ReplaceImageItem;


function onClick(element) {
    let ratio = element.offsetWidth / element.offsetHeight;
    novi.media.choose({onSubmit: onSubmitCrop.bind(this,element), width: element.offsetWidth, height: element.offsetHeight, type: Types.mediaImage})
}

function onSubmitCrop(element, path) {
    let correctPath = path.replace(/['|"]/g, ``);
    let currentSlide = Utils.getCurrentSlideElement(element);
    if (!currentSlide) return;

    novi.element.setAttribute(currentSlide, "data-slide-bg", correctPath);
    currentSlide.style["backgroundImage"] = `url(${correctPath})`;
    currentSlide.setAttribute("data-slide-bg", correctPath);
}
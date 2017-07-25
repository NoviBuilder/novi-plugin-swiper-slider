import * as Utils from "./Utils";

const React = novi.react.React;
const Icons = novi.ui.icons;
const Icon = novi.ui.icon;
const modal = novi.modal;
const acceptImages = novi.types.images;

const ReplaceImageItem = {
    trigger: <Icon>{Icons.ICON_BG_IMAGE}</Icon>,
    tooltip: "Replace Slide Image",
    closeIcon: "submit",
    title: "Replace Slide Image",
    onTriggerClick: onClick
};

export default ReplaceImageItem;


function onClick(element) {
    modal.fileUpload({
        path: novi.media.directory,
        accept: acceptImages,
        messages: {
            submit: "Upload an Image",
            title: "Upload an image",
            body: 'Click on "Choose File" to upload your image.'
        },
        onSubmitClick: onSubmitClick.bind(this, element)
    })
}

function onSubmitClick(element, path) {
    let correctPath = path.replace(/['|"]/g, ``);
    let currentSlide = Utils.getCurrentSlideElement(element);
    if (!currentSlide) return;

    novi.element.setAttribute(currentSlide, "data-slide-bg", correctPath);
    currentSlide.style["backgroundImage"] = `url(${correctPath})`;
    currentSlide.setAttribute("data-slide-bg", correctPath);
}
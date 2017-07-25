import * as Utils from "./Utils";
const React = novi.react.React;
const Icons = novi.ui.icons;
const Icon = novi.ui.icon;

const AddSlideItem = {
    trigger: <Icon>{Icons.ICON_PLUS_SQUARE}</Icon>,
    tooltip: "Add Slide",
    closeIcon: "submit",
    title: "Add New Slide",
    collapsed: true,
    onTriggerClick: addSlide
};

export default AddSlideItem;


function addSlide(element) {
    let correctPath = path.replace(/['|"]/g, ``);
    let currentSlide = Utils.getCurrentSlideElement(element);
    if (!currentSlide) return;

    let staticElement = novi.element.getStaticReference(currentSlide);
    let slidesCount = Utils.getSlidesCount(element);
    if (!staticElement) return;

    let newStaticSlide = staticElement.cloneNode(true);
    let staticSlideParent = novi.element.getStaticReference(currentSlide.parentNode);
    novi.element.appendStatic(newStaticSlide, staticSlideParent);
    let newDynamicSlide = novi.element.map(newStaticSlide);
    let url;

    let swiper = element.swiper;
    swiper.appendSlide(newDynamicSlide);
    if (url = newDynamicSlide.getAttribute("data-slide-bg")){
        newDynamicSlide.style["backgroundImage"] = `url(${url})`;
        newDynamicSlide.style["backgroundSize"] = "cover";
    }
    swiper.slideTo(slidesCount);
}


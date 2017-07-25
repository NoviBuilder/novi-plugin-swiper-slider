import * as Utils from "./Utils";
const React = novi.react.React;
const Icons = novi.ui.icons;
const Icon = novi.ui.icon;

const RemoveSlideItem = {
    trigger: <Icon>{Icons.ICON_MINUS_SQUARE}</Icon>,
    tooltip: "Remove Slide",
    closeIcon: "submit",
    title: "Remove Active Slide",
    collapsed: true,
    onTriggerClick: removeSlide
};

export default RemoveSlideItem;


function removeSlide(element) {
    let currentSlideIndex = Utils.getCurrentSlideIndex(element);
    let currentSlide = Utils.getCurrentSlideElement(element);
    let staticCurrentSlide = novi.element.getStaticReference(currentSlide);
    let slidesCount = Utils.getSlidesCount(element);
    if (!currentSlide || slidesCount <= 1) return;

    let swiper = element.swiper;
    swiper.removeSlide(currentSlideIndex);
    novi.element.removeStatic(staticCurrentSlide);
}

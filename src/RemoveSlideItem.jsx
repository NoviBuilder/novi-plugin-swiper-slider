import * as Utils from "./Utils";
const React = novi.react.React;
const Icons = novi.ui.icons;
const Icon = novi.ui.icon;
const messages = novi.language.getDataByKey("novi-plugin-swiper-slider");
const RemoveSlideItem = {
    trigger: <Icon>{Icons.ICON_MINUS_SQUARE}</Icon>,
    tooltip: messages.editor.removeSlide.tooltip,
    closeIcon: "submit",
    title: messages.editor.removeSlide.title,
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

    // When remove a slide, the next slide doesn't display the content because the animation doesn't work
    Utils.removeAnimationWhenRemoveSlide(element, 
        currentSlideIndex != slidesCount -1 ? currentSlideIndex+1 : currentSlideIndex-1);

    let swiper = element.swiper;
    swiper.removeSlide(currentSlideIndex);
    novi.element.removeStatic(staticCurrentSlide);
}

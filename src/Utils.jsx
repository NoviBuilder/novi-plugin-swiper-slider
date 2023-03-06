const utils = novi.utils;
export function getCurrentSlideElement(element){
    return element.querySelector(".swiper-slide.swiper-slide-active");
}

export function getSlidesCount(element){
    let slidesParent = element.querySelector(".swiper-slide.swiper-slide-active").parentNode;
    if (!slidesParent) return null;
    let j = 0, slideCounter = 0;

    while(j < slidesParent.childNodes.length){
        if (utils.dom.isElementNode(slidesParent.childNodes[j])){
            slideCounter++;
        }

        j++;
    }


    return slideCounter;
}

export function removeAnimationWhenRemoveSlide(element, currentSlideIndex){
    let tmpCurrent = element.querySelectorAll(".swiper-slide");
    if (!tmpCurrent) return null;

    let nextSlide = tmpCurrent[currentSlideIndex];
    const elementsWithNotAnimated = nextSlide.querySelectorAll(".not-animated");
    if (elementsWithNotAnimated.length > 0) {
        for (const child of elementsWithNotAnimated) {
            child.classList.remove("not-animated");
        }
    }
}

export function getCurrentSlideIndex(element){
    let tmpCurrent = element.querySelector(".swiper-slide.swiper-slide-active");
    if (!tmpCurrent) return null;

    let childNodes = tmpCurrent.parentNode.childNodes;
    let elementCounter = 0;
    for (let i = 0; i < childNodes.length; i++){
        if (childNodes[i] === tmpCurrent) {
            return elementCounter;
        }
        if (childNodes[i].nodeType === 1) elementCounter++;
    }

    return null;
}

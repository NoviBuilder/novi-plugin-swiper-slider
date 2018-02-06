# novi-plugin-swiper-slider
Novi Builder Plugin for visual [Swiper Slider](http://idangero.us/swiper/) customization

## How to Intall
You should follow several simple steps to intall this plugin:
* Copy the novi-plugin-swiper-slider.js file to your path/to/novibuilder/plugins folder.
* Launch NoviBuilder 

## What you are able to do
* Change slide background image
* Add/Remove slides
* Change slider effect
* Turn on/off slider autoplay
* Set autoplay delay in seconds

## Developer Settings
* querySelector — containes a css selector which defines the Plugin container.
* effect — containes available effects for choosing by user.


## How to add Swiper Slider on your page
If your website doesn't contain Swiper Slider follow the instructions below to install it.

### Include Swiper files to Website
Copy the "assets/swiper.js" and "assets/swiper.css" to website's JS and CSS folders respectively and include this files to your website.

### Add Swiper HTML Layout
Add basic Swiper HTML Layout:

```html
 <!-- Slider main container -->
 <div class="swiper-container">
     <!-- Additional required wrapper -->
     <div class="swiper-wrapper">
        <!-- If you want add slide with background image, add data-slide-bg attribute  -->
         <div class="swiper-slide" data-slide-bg="images/example.jpg">Slide 1
             <div class="swiper-slide-caption">

             </div>
         </div>
         <div class="swiper-slide">Slide 2</div>
         ...
     </div>
     <!-- If you need pagination -->
     <div class="swiper-pagination"></div>

     <!-- If you need navigation buttons -->
     <div class="swiper-button-prev"></div>
     <div class="swiper-button-next"></div>
 </div>
```

### Initialize Swiper Slider
Initialize Swiper in JS by adding following block code:

```js

$document.ready(function () {
    var isNoviBuilder = window.xMode;
    var swiper = $(".swiper-container");

    /**
     * getSwiperHeight
     * @description  calculate the height of swiper slider basing on data attr
     */
    function getSwiperHeight(object, attr) {
      var val = object.attr("data-" + attr),
        dim;

      if (!val) {
        return undefined;
      }

      dim = val.match(/(px)|(%)|(vh)$/i);

      if (dim.length) {
        switch (dim[0]) {
          case "px":
            return parseFloat(val);
          case "vh":
            return $window.height() * (parseFloat(val) / 100);
          case "%":
            return object.width() * (parseFloat(val) / 100);
        }
      } else {
        return undefined;
      }
    }

    /**
     * Swiper
     * @description  Enable Swiper Slider
     */
    if (swiper.length) {
      var i, j;
      for (i = 0; i < swiper.length; i++) {
        var s = $(swiper[i]);
        var pag = s.find(".swiper-pagination"),
          next = s.find(".swiper-button-next"),
          prev = s.find(".swiper-button-prev"),
          bar = s.find(".swiper-scrollbar"),
          swiperSlide = s.find(".swiper-slide"),
          autoplay = false;

        for (j = 0; j < swiperSlide.length; j++) {
          var $this = $(swiperSlide[j]),
            url;

          if (url = $this.attr("data-slide-bg")) {
            $this.css({
              "background-image": "url(" + url + ")",
              "background-size": "cover"
            })
          }
        }


        s.swiper({
            autoplay: s.attr('data-autoplay') ? s.attr('data-autoplay') === "false" ? undefined : s.attr('data-autoplay-delay') : 5000,
            direction: s.attr('data-direction') ? s.attr('data-direction') : "horizontal",
            effect: s.attr('data-slide-effect') ? s.attr('data-slide-effect') : "slide",
            speed: s.attr('data-slide-speed') ? s.attr('data-slide-speed') : 600,
            keyboardControl: s.attr('data-keyboard') === "true",
            mousewheelControl: s.attr('data-mousewheel') === "true",
            mousewheelReleaseOnEdges: s.attr('data-mousewheel-release') === "true",
            nextButton: next.length ? next.get(0) : null,
            prevButton: prev.length ? prev.get(0) : null,
            pagination: pag.length ? pag.get(0) : null,
            paginationClickable: pag.length ? pag.attr("data-clickable") !== "false" : false,
            paginationBulletRender: pag.length ? pag.attr("data-index-bullet") === "true" ? function (index, className) {
              return '<span class="' + className + '">' + (index + 1) + '</span>';
            } : null : null,
            scrollbar: bar.length ? bar.get(0) : null,
            scrollbarDraggable: bar.length ? bar.attr("data-draggable") !== "false" : true,
            scrollbarHide: bar.length ? bar.attr("data-draggable") === "false" : false,
            loop: isNoviBuilder ? false : s.attr('data-loop') !== "false",
            simulateTouch: s.attr('data-simulate-touch') && !isNoviBuilder ? s.attr('data-simulate-touch') === "true" : false,
            onInit: function (swiper) {
              $window.on('resize', function () {
                swiper.update(true);

                var mh = getSwiperHeight(s, "min-height"),
                  h = getSwiperHeight(s, "height");
                if (h) {
                  s.css("height", mh ? mh > h ? mh : h : h);
                }
              })
            }
          });
      }
    }
});

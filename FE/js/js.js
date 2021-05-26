let cv = {};

(function () {
    "use strict";
  
    // define variables
    var items = document.querySelectorAll(".timeline li");
  
    // check if an element is in viewport
    // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      //if conten in card have many values
      if (rect.height >= window.innerHeight ) {
        return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.top <= 
          (window.innerHeight || document.documentElement.clientHeight)/2 &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
      }

      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function callbackFunc() {
      
      console.log(items[0].getBoundingClientRect());
      for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          items[i].classList.add("in-view");
        }
        //  else{
        //   items[i].classList.remove("in-view");
        // }
      }
    }
  
    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);


    $(".js-card").hover(function(e){
      let cardTime = $(e.currentTarget).find('.js-card-time');
      $(cardTime).addClass('card-time--show');
      }, function(e){
        let cardTime = $(e.currentTarget).find('.js-card-time');
      $(cardTime).removeClass('card-time--show');
    });

    function init(){
      TweenMax.fromTo('.cont_modal_back',0.5,{left:'-100%'},{left:'0%',delay:0.5});
     
      TweenMax.fromTo('.cont_modal',0.5,{left:'200%'},{left:'50%',delay:1});
     
      TweenMax.fromTo('.cont_text_modal',0.5,{left:'-200%'},{left:50,delay:1});
     
      TweenMax.fromTo('.cont_back_azul',1.5,{left:-200},{left:0,delay:1});
     
      // TweenMax.fromTo('.text_1',0.5,{scale:0},{scale:1,delay:1.5});
       
      // TweenMax.fromTo('.text_phone',0.5,{scale:0},{scale:1,delay:1.7});

      // TweenMax.fromTo('.text_email',0.5,{scale:0},{scale:1,delay:1.9});
     
     }
     init();
     
  })();

  $(document).ready(function () {
    cv.init();
  });

  
  cv.init = () => {
    cv.getPhone();
  };

  cv.getPhone = () => {
    let phone = $('.js-phone').text();
    $('.js-phone').attr("href", `tel:${phone}`);
  };
  
  
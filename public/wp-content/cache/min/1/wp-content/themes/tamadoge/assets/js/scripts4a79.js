document.addEventListener('wpcf7mailsent',function(e){var url_redirect='';var inputs=e.detail.inputs;for(var i=0;i<inputs.length;i++){if('url_redirect'==inputs[i].name){url_redirect=inputs[i].value}}
if(url_redirect){setTimeout(function(){location=url_redirect},2000)}},!1);const swiperRoad=new Swiper(".mySwiperRoadmap",{autoHeight:!0,slidesPerView:1,spaceBetween:30,navigation:{prevEl:'.slidePrev-btn',nextEl:'.slideNext-btn'},breakpoints:{640:{slidesPerView:1,spaceBetween:20,},768:{slidesPerView:1,spaceBetween:40,},1024:{slidesPerView:2,spaceBetween:50,},},});const swiperTeam=new Swiper(".mySwiperTeam",{autoHeight:!0,slidesPerView:1,spaceBetween:24,navigation:{prevEl:'.slidePrev-btn',nextEl:'.slideNext-btn'},breakpoints:{640:{slidesPerView:1,spaceBetween:24,},768:{slidesPerView:3,spaceBetween:24,},1024:{slidesPerView:6,spaceBetween:24,},},});const SwiperFeaturedHome=new Swiper(".mySwiperFeaturedHome",{autoHeight:!0,slidesPerView:1,spaceBetween:24,navigation:{prevEl:'.slidePrev-btn',nextEl:'.slideNext-btn'},});const SwiperNewsHome=new Swiper(".mySwiperNewsHome",{autoHeight:!0,slidesPerView:1,spaceBetween:24,navigation:{prevEl:'.slidePrev-btn',nextEl:'.slideNext-btn'},});const swiperNews=new Swiper(".mySwiperNews",{autoHeight:!0,slidesPerView:1,spaceBetween:24,navigation:{prevEl:'.slidePrev-btn',nextEl:'.slideNext-btn'},breakpoints:{640:{slidesPerView:1,spaceBetween:24,},768:{slidesPerView:2,spaceBetween:24,},1024:{slidesPerView:3,spaceBetween:24,},},});const swiper=new Swiper(".featuredIn",{slidesPerView:2,spaceBetween:40,loop:!0,loopFillGroupWithBlank:!0,autoplay:{delay:4500,disableOnInteraction:!1,},breakpoints:{640:{slidesPerView:2,spaceBetween:10,},768:{slidesPerView:3,spaceBetween:40,},1024:{slidesPerView:6,spaceBetween:40,},},});const swiperpower=new Swiper(".poweredBy-old",{slidesPerView:2,spaceBetween:40,loop:!0,loopFillGroupWithBlank:!0,breakpoints:{640:{slidesPerView:2,spaceBetween:24,},768:{slidesPerView:3,spaceBetween:40,},1024:{slidesPerView:4,spaceBetween:40,},},})
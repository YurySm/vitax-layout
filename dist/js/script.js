'use strict';
$(document).ready(function(){    
    //slick promo
    $('.promo__slider').slick({
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        autoplay: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/slider/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/icons/slider/right.svg"></button>',
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    arrows: false
                }
            }
        ]
    });

    // slider
    $('.slider').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        
        prevArrow: '<button type="button" class="slick-prev prev"><img src="img/icons/slider/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next next"><img src="img/icons/slider/right.svg"></button>',
        responsive: [
            {
              breakpoint: 1799,
              settings: {
                slidesToShow: 3
              }
            },
            {
                breakpoint: 1199,
                settings: {
                  slidesToShow: 2
                }
            },
            {
                breakpoint: 899,
                settings: {
                  slidesToShow: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1
                }
            }
          ]
    });

        // slider_white
    $('.red_slider').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        
        prevArrow: '<button type="button" class="slick-prev_white prev"><img src="img/icons/slider/l-white.svg"></button>',
        nextArrow: '<button type="button" class="slick-next_white next"><img src="img/icons/slider/r-white.svg"></button>',
        responsive: [
            {
              breakpoint: 1799,
              settings: {
                slidesToShow: 3
              }
            },
            {
                breakpoint: 1199,
                settings: {
                  slidesToShow: 2
                }
            },
            {
                breakpoint: 899,
                settings: {
                  slidesToShow: 1
                }
            }
          ]
    });

        // slider product
    $('.product__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        prevArrow: '<button type="button" class="slick-prev product-p"><img src="img/icons/slider/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next product-n"><img src="img/icons/slider/right.svg"></button>',
        asNavFor: '.product__slider_nav'                     
    });
    $('.product__slider_nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,         
        asNavFor: '.product__slider',      
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        arrows: false, 
        infinite: true,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                  slidesToShow: 4
                }
            },
            {
                breakpoint: 900,
                settings: {
                  slidesToShow: 3
                }
            }
        ]
        
         
    });

    //input number
    $('.numb').number_plugin({
        width: '30px', 
        height: '35px', 
        negative: false, 
        step: 1, 
        animate: true, 
        delay: 100, 
        max: 20, 
        min: 1, 
        style: 'line'
    });

});


document.addEventListener('DOMContentLoaded', () => {
    //hover for collectons
    const collections = document.querySelectorAll('.collections__item');
    const btn = document.querySelectorAll('.collections__btn');
    const wrapper = document.querySelectorAll('.collections__item_wrapper');

    function addClass(i) {
        collections[i].addEventListener('mouseover', () => {
            collections[i].classList.add('main-bg');
            btn[i].classList.add('op1');
            wrapper[i].classList.add('m25');
        });
    }

    function removeClass(i) {
        collections[i].addEventListener('mouseout', () => {
            collections[i].classList.remove('main-bg');
            btn[i].classList.remove('op1');
            wrapper[i].classList.remove('m25');
        });
    }
    
    for( let i = 0; i < collections.length; i++) {
        addClass(i);
        removeClass(i);
    }
    
            //mob menu promo  
    const btnMenu = document.querySelector('.promo__mob_btn'),
    btnClose = document.querySelector('.promo__mob_close'),
    menuNav = document.querySelector('.promo__menu_items'),
    menuItem = document.querySelectorAll('.promo__menu_item');

    btnMenu.addEventListener('click', () => {
        menuNav.classList.add('promo__menu_items_active');
        document.body.style.overflow = 'hidden';
    });

    btnClose.addEventListener('click', () => {
        menuNav.classList.remove('promo__menu_items_active');
        document.body.style.overflow = '';
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            menuNav.classList.remove('promo__menu_items_active');
            document.body.style.overflow = '';
        });
    });

    //mob menu header

    const hamburger = document.querySelector('.hamburger'),
        hamburgerClose = document.querySelector('.header__mob_close'),
        headerNav = document.querySelector('.header__nav'),
        navUl = document.querySelectorAll('.mob_nav li'),
        headerMenu = document.querySelectorAll('.header__menu_item');

        hamburger.addEventListener('click', () => {
            headerNav.classList.add('header__nav_active');
            document.body.style.overflow = 'hidden';
        });

        hamburgerClose.addEventListener('click', () => {
            headerNav.classList.remove('header__nav_active');
            document.body.style.overflow = '';
        });

        headerMenu.forEach(item => {
            item.addEventListener('click', () => {
                headerNav.classList.remove('header__nav_active');
                document.body.style.overflow = '';
            });
        });

        navUl.forEach(item => {
            item.addEventListener('click', () => {
                headerNav.classList.remove('header__nav_active');
                document.body.style.overflow = '';

            });
        });

    // TABS
    const tabs = document.querySelectorAll('.product__tabitem'),
    tabsContent = document.querySelectorAll('.product__tabcontent'),
    tabsParent = document.querySelector('.product__tabitems');

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('product__tabitem_active');
        });
    }
    function shoeTabContent(i = 0) {  
        tabsContent[i].classList.remove('hide');
        tabsContent[i].classList.add('show', 'fade'); 

        tabs[i].classList.add('product__tabitem_active');
    }

    hideTabContent();
    shoeTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;
 
        if(target && target.matches('div.product__tabitem')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    shoeTabContent(i);
                }
            });
        }
    });

});



    




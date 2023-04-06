let productGallery = document.querySelector('.deployed-product__gallery');

let popular = document.querySelector('.popular');

let everyDay = document.querySelector('.every-day');

/*Функционал галереи продукта */

if (productGallery) {


    let productSlides = productGallery.querySelector('.deployed-product__gallery-list');

    let productLeftBtn = productGallery.querySelector('.deployed-product__gallery-window-btns-left');

    let productRightBtn = productGallery.querySelector('.deployed-product__gallery-window-btns-right');

    var productToggleBtns = productGallery.querySelectorAll('.deployed-product__gallery-img-toggle-btn');

    let productFirstSlideClass = 'deployed-product__gallery-list--first'
    let productSecondSlideClass = 'deployed-product__gallery-list--second'
    let productThirtSlideClass = 'deployed-product__gallery-list--third'
    let productToggleBtnsActiveClass = 'deployed-product__gallery-img-toggle-btn--active';


    /* функционал левой кнопки пролистывания слайдера продукта */

    productLeftBtn.addEventListener('click', function (evt) {

        if (productSlides.classList.contains(productFirstSlideClass)) {

            productSlides.classList.remove(productFirstSlideClass);

            productSlides.classList.add(productSecondSlideClass);

        } else if (productSlides.classList.contains(productSecondSlideClass)) {

            productSlides.classList.remove(productSecondSlideClass);

            productSlides.classList.add(productThirtSlideClass);

        } else if (productSlides.classList.contains(productThirtSlideClass)) {

            productSlides.classList.remove(productThirtSlideClass);

            productSlides.classList.add(productFirstSlideClass);

        }


    });

    /* функционал правой кнопки пролистывания слайдера продукта */

    productRightBtn.addEventListener('click', function (evt) {

        if (productSlides.classList.contains(productFirstSlideClass)) {

            productSlides.classList.remove(productFirstSlideClass);

            productSlides.classList.add(productThirtSlideClass);

        } else if (productSlides.classList.contains(productThirtSlideClass)) {

            productSlides.classList.remove(productThirtSlideClass);

            productSlides.classList.add(productSecondSlideClass);

        } else if (productSlides.classList.contains(productSecondSlideClass)) {

            productSlides.classList.remove(productSecondSlideClass);

            productSlides.classList.add(productFirstSlideClass);
        }

    });

    /* переключения слайдера кнопками с конкретным слайдом */

    for (let btn = 0; btn < productToggleBtns.length; btn++) {

        productToggleBtns[btn].addEventListener('click', function (evt) {



            if (productToggleBtns[btn].dataset.number == 1) {



                if (!productSlides.classList.contains(productFirstSlideClass)) {

                    productSlides.classList.remove(productThirtSlideClass);
                    productSlides.classList.remove(productSecondSlideClass);

                    productSlides.classList.add(productFirstSlideClass);

                    for (let i = 0; i < productToggleBtns.length; i++) {
                        productToggleBtns[i].classList.remove(productToggleBtnsActiveClass);
                    }

                    productToggleBtns[btn].classList.add(productToggleBtnsActiveClass);
                }

            } else if (productToggleBtns[btn].dataset.number == 2) {



                if (!productSlides.classList.contains(productSecondSlideClass)) {

                    productSlides.classList.remove(productFirstSlideClass);
                    productSlides.classList.remove(productThirtSlideClass);

                    productSlides.classList.add(productSecondSlideClass);

                    for (let i = 0; i < productToggleBtns.length; i++) {
                        productToggleBtns[i].classList.remove(productToggleBtnsActiveClass);
                    }

                    productToggleBtns[btn].classList.add(productToggleBtnsActiveClass);
                }

            } else if (productToggleBtns[btn].dataset.number == 3) {



                if (!productSlides.classList.contains(productThirtSlideClass)) {

                    productSlides.classList.remove(productFirstSlideClass);
                    productSlides.classList.remove(productSecondSlideClass);

                    productSlides.classList.add(productThirtSlideClass);

                    for (let i = 0; i < productToggleBtns.length; i++) {
                        productToggleBtns[i].classList.remove(productToggleBtnsActiveClass);
                    }

                    productToggleBtns[btn].classList.add(productToggleBtnsActiveClass);
                }

            }

        });

    }

}

/*Функционал галереи поп товаров */

if (popular) {

    let popularLeftBtn = popular.querySelector('.popular-slider-controls__btn--left');
    let popularRightBtn = popular.querySelector('.popular-slider-controls__btn--right');
    let popularSliderList = popular.querySelector('.popular-slider-list');

    let popularFirstSlideClass = 'popular-slider-list--first-slide';
    let popularSecondSlideClass = 'popular-slider-list--second-slide';


    popularLeftBtn.addEventListener('click', function (evt) {

        if (popularSliderList.classList.contains(popularFirstSlideClass)) {

            popularSliderList.classList.remove(popularFirstSlideClass);

            popularSliderList.classList.add(popularSecondSlideClass);

        } else if (popularSliderList.classList.contains(popularSecondSlideClass)) {

            popularSliderList.classList.remove(popularSecondSlideClass);

            popularSliderList.classList.add(popularFirstSlideClass);

        }

    });


    popularRightBtn.addEventListener('click', function (evt) {

        if (popularSliderList.classList.contains(popularFirstSlideClass)) {

            popularSliderList.classList.remove(popularFirstSlideClass);

            popularSliderList.classList.add(popularSecondSlideClass);

        } else if (popularSliderList.classList.contains(popularSecondSlideClass)) {

            popularSliderList.classList.remove(popularSecondSlideClass);

            popularSliderList.classList.add(popularFirstSlideClass);

        }

    });
}

/*Функционал галереи коллекции на каждый день */

if (everyDay) {

    var everyDayBtns = everyDay.querySelectorAll('.every-day__slider-thumb-item');

    let everyDaySlideList = everyDay.querySelector('.every-day__big-photo-list');

    var everyDayIndicators = everyDay.querySelectorAll('.every-day__slider-indication-item');

    let everyDayFirstSlideClass = 'every-day__big-photo-list--first';
    let everyDaySecondSlideClass = 'every-day__big-photo-list--second';
    let everyDayThirtSlideClass = 'every-day__big-photo-list--thirt';
    let everyDayFourSlideClass = 'every-day__big-photo-list--four';
    let everyDayActiveIndicatorClass = ('every-day__slider-indication-item--active');

    let hideClass = 'display-none';


    let DelHideClass = function (elements, HideClass) {

        for (let i = 0; i < elements.length; i++) {


            elements[i].classList.remove(HideClass);

        }

    }

    let everyDayIndication = function (indicators, IndicationClass, currentPosition) {

        for (let i = 0; i < indicators.length; i++) {

            indicators[i].classList.remove(IndicationClass);

        }

        currentPosition = Number(currentPosition);
        currentPosition -= 1;

        indicators[currentPosition].classList.add(IndicationClass);

    }


    for (let btn = 0; btn < everyDayBtns.length; btn++) {

        everyDayBtns[btn].addEventListener('click', function (evt) {

            if (everyDayBtns[btn].dataset.number == 1) {

                everyDaySlideList.classList.remove(everyDaySecondSlideClass);
                everyDaySlideList.classList.remove(everyDayThirtSlideClass);
                everyDaySlideList.classList.remove(everyDayFourSlideClass);

                everyDaySlideList.classList.add(everyDayFirstSlideClass);

                DelHideClass(everyDayBtns, hideClass);

                everyDayBtns[btn].classList.add(hideClass);

                everyDayIndication(everyDayIndicators, everyDayActiveIndicatorClass, everyDayBtns[btn].dataset.number);

            } else if (everyDayBtns[btn].dataset.number == 2) {

                everyDaySlideList.classList.remove(everyDayFirstSlideClass);
                everyDaySlideList.classList.remove(everyDayThirtSlideClass);
                everyDaySlideList.classList.remove(everyDayFourSlideClass);

                everyDaySlideList.classList.add(everyDaySecondSlideClass);

                DelHideClass(everyDayBtns, hideClass);

                everyDayBtns[btn].classList.add(hideClass);

                everyDayIndication(everyDayIndicators, everyDayActiveIndicatorClass, everyDayBtns[btn].dataset.number);

            } else if (everyDayBtns[btn].dataset.number == 3) {

                everyDaySlideList.classList.remove(everyDayFirstSlideClass);
                everyDaySlideList.classList.remove(everyDaySecondSlideClass);
                everyDaySlideList.classList.remove(everyDayFourSlideClass);

                everyDaySlideList.classList.add(everyDayThirtSlideClass);

                DelHideClass(everyDayBtns, hideClass);

                everyDayBtns[btn].classList.add(hideClass);

                everyDayIndication(everyDayIndicators, everyDayActiveIndicatorClass, everyDayBtns[btn].dataset.number);

            } else if (everyDayBtns[btn].dataset.number == 4) {

                everyDaySlideList.classList.remove(everyDayFirstSlideClass);
                everyDaySlideList.classList.remove(everyDaySecondSlideClass);
                everyDaySlideList.classList.remove(everyDayThirtSlideClass);

                everyDaySlideList.classList.add(everyDayFourSlideClass);

                DelHideClass(everyDayBtns, hideClass);

                everyDayBtns[btn].classList.add(hideClass);
                everyDayIndication(everyDayIndicators, everyDayActiveIndicatorClass, everyDayBtns[btn].dataset.number);
            }


        });





    }

}
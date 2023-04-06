let productGallery = document.querySelector('.deployed-product__gallery');

let popular = document.querySelector('.popular');

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
let productGallery = document.querySelector('.deployed-product__gallery');

let productSlides = productGallery.querySelector('.deployed-product__gallery-list');

let productLeftBtn = productGallery.querySelector('.deployed-product__gallery-window-btns-left');

let productRightBtn = productGallery.querySelector('.deployed-product__gallery-window-btns-right');

let productFirstSlideClass = 'deployed-product__gallery-list--first'
let productSecondSlideClass = 'deployed-product__gallery-list--second'
let productThirtSlideClass = 'deployed-product__gallery-list--third'


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